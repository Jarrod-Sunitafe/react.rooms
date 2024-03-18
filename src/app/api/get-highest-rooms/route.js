// Import necessary dependencies
import clientPromise from '@/lib/mongodb';
import { Int32 } from 'mongodb';

let client;
let database;
let rooms;


async function init() {
    try {
      console.log('Initializing MongoDB connection...');
      client = await clientPromise;
  
      database = client.db(process.env.MongoDb);

      await client.db(process.env.MongoDb).command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!")
  
      rooms = database.collection("Rooms");
      console.log('Collection selected: Rooms');
    } catch (error) {
      console.error('Failed to connect to the database:', error);
      throw error; // Re-throw the error to indicate initialization failure
    }
  }
  
  // Function to handle GET requests to fetch rooms
  export async function GET(request) {
    
    try {
      // Ensure database and collections are initialized
      if (!rooms) await init();
      
      const requestMethod = request.method;
      console.log(`Received ${requestMethod} request.`);
  
      // You can also access other properties of the request object
      console.error('Request Headers:', request.headers);
  
      // Query rooms collection and return the result
      console.log('Fetching rooms with ActiveCount...');
      const result = await rooms
      .find({ActiveCount: Int32})
      .sort({ ActiveCount: -1})
      .limit(10)
      .toArray();

      console.log('Rooms count:', result);
  
      return new Response(JSON.stringify({ rooms: result }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.error('Failed to fetch rooms:', error);
      return new Response(JSON.stringify({ error: 'Failed to fetch Rooms' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    } 
    
  }
