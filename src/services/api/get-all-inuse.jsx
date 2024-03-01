import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
    try {
        let client = await clientPromise;
        let database = client.db(`${process.env.MongoDb}`);
        let agent = database.collection("Agents");
        console.log('Connected');
        let count = await agent.countDocuments({ IsActive: true });

        res.status(200).json({count});
        client.close();

    } catch (error) {
        console.error('Failed to connect to the database:', error);
        res.status(500).json("Failed to get agents");
    }
}