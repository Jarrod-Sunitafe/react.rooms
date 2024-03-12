// Import necessary dependencies
import clientPromise from '@/lib/mongodb';

let client;
let database;
let agents;


async function init() {
    try {
      console.log('Initializing MongoDB connection...');
      client = await clientPromise;
  
      database = client.db(process.env.MongoDb);

      await client.db(process.env.MongoDb).command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!")
  
      agents = database.collection("Agents");
      console.log('Collection selected: Agents');
    } catch (error) {
      console.error('Failed to connect to the database:', error);
      throw error; // Re-throw the error to indicate initialization failure
    }
  }
  
  // Function to handle GET requests to fetch agents
  export async function GET() {
    let session;
  
    try {
      // Ensure database and collections are initialized
      if (!agents) {
        console.log('Agents collection not initialized, calling init()...');
        await init();
      }
  
      // Start a new session for this request
      console.log('Starting a new session...');
      session = client.startSession();
  
      // Query agents collection and return the result
      console.log('Fetching agents with IsOnline=true...');
      const result = await agents.countDocuments({ IsOnline: true }, { session });
      console.log('Agents count:', result);
  
      return new Response(JSON.stringify({ agents: result }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.error('Failed to fetch agents:', error);
      return new Response(JSON.stringify({ error: 'Failed to fetch Agents' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    } finally {
      // End the session
      if (client) {
        console.log('Ending session...');
        await client.close();
      }
    }
  }
