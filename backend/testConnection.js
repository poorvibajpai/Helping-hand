const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB Atlas!');
  } catch (err) {
    console.error('❌ Connection Error:', err);
  } finally {
    await client.close();
  }
}

run();
