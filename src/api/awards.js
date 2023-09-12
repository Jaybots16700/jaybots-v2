import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
		const user = token;
		const client = await clientPromise;
		const db = client.db("jaybots-v2");
		return res.json(await db.collection("awards").find({}).toArray());
};
i