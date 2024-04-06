import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
import process from 'node:process';

dotenv.config();

async function newConnection() {
  const url = process.env.URL;

  try {
    const client = new MongoClient(url);
    await client.connect();
    console.log('DB connection stablished');
    return client;
  } catch (error) {
    console.log(error);
  }
}
export const client = await newConnection();
