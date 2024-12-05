import clientPromise from "../../lib/db.ts";

export default async (req, res) => {
		const client = await clientPromise;
		const db = client.db("jaybots-v2");
		return res.json(await db.collection("members").find({}).toArray());
};
