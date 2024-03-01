// Import necessary dependencies
import { MongoClient } from 'mongodb';
import clientPromise from '@/lib/mongodb';

// Define a function to handle GET requests
export async function GET(res) {
    try {
        const client = await clientPromise;
        const database = client.db(process.env.MongoDb);
        const agent = database.collection("Agents");
        console.log('Connected');

        // Use await inside an asynchronous function
        const count = await agent.countDocuments({ IsActive: true });

        res.status(200).json({ count });
        client.close();
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
}
