// Import necessary dependencies
import { MongoClient } from 'mongodb';
import clientPromise from '@/lib/mongodb';

let client;
let database;
let agents;


async function init() {
    try {
        client = await clientPromise;
        database = client.db(process.env.MongoDb);
        agents = database.collection("Agents");
    } catch (error) {
        console.error('Failed to connect to the database:', error);
        throw error; // Re-throw the error to indicate initialization failure
    }
}

// Function to handle GET requests to fetch agents
export async function GET() {
    try {
        // Ensure database and collections are initialized
        if (!agents) await init();

        // Query agents collection and return the result
        const result = await agents.countDocuments({ IsOnline: true });
        return new Response(JSON.stringify({ agents: result }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error('Failed to fetch agents:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch Agents' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}
