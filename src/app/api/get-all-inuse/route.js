'use server'

import ClientPromise from '@/lib/mongodb';
import { MongoClient } from "mongodb";

let client;
let database;
let agents;


async function init() {
    try {
        const uri = process.env.MONGODB_URI;
        const options = {
        tlsCAFile: '/etc/ssl/certs/ca-certificates.crt',
        tlsAllowInvalidCertificates: true,
        };

        client = new MongoClient(uri, options);
        database = client.db(process.env.MongoDb);
        agents = database.collection("Agents");
    } catch (error) {
        console.error('Failed to connect to the database:', error);
        throw error; // Re-throw the error to indicate initialization failure
    }
}

// Function to handle GET requests to fetch agents
export async function GET(request) {
    try {
        // Ensure database and collections are initialized
        if (!agents) await init();

        const requestMethod = request.method;
        console.log(`Received ${requestMethod} request.`);
    
        // You can also access other properties of the request object
        console.error('Request Headers:', request.headers);

        await client.connect();

        // Query agents collection and return the result
        const result = await agents.countDocuments({ IsActive: true });

        return new Response(JSON.stringify({ agents: result }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error('Failed to fetch agents:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch Agents' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    } finally {
    // End the session
        console.log('Ending session...');
        await client.close();
    }
};
      

