// api/new-meetup
// POST /api/new-meetup

import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = MongoClient.connect("mongodb://127.0.0.1/meetUps");

    const db = (await client).db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    (await client).close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
