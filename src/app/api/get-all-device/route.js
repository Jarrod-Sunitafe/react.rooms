// Import necessary dependencies
import clientPromise from '@/lib/mongodb';

let client;
let database;
let devices;


async function init() {
    try {
        client = await clientPromise;
        database = client.db(process.env.MongoDb);
        devices = database.collection("Devices");
    } catch (error) {
        console.error('Failed to connect to the database:', error);
        throw error; // Re-throw the error to indicate initialization failure
    }
}

// Function to handle GET requests to fetch agents
export async function GET(request) {
    try {
        // Ensure database and collections are initialized
        if (!devices) await init();

        const requestMethod = request.method;
        console.log(`Received ${requestMethod} request.`);
    
        // You can also access other properties of the request object
        console.error('Request Headers:', request.headers);

        // Query agents collection and return the result
        const result = await devices.countDocuments();
        return new Response(JSON.stringify({ devices: result }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error('Failed to fetch agents:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch Agents' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

