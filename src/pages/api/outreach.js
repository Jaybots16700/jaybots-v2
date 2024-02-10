import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
		const client = await clientPromise;
		const db = client.db("main");
		return res.json(await db.collection("outreach").find({}).toArray());
};
