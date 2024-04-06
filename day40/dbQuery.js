import { client } from './dbConnection.js';

export async function createNewRoom(room) {
  await client.db('hallBookingApp').collection('rooms').insertOne(room);
}

export async function bookNewRoom(newroom) {
  await client.db('hallBookingApp').collection('booking').insertOne(newroom);
}
export async function getAllBookingDetails() {
  return await client
    .db('hallBookingApp')
    .collection('booking')
    .find({})
    .toArray();
}

export async function getSingleCustomerBookingDetails(name) {
  return await client
    .db('hallBookingApp')
    .collection('booking')
    .find({ customer_name: name })
    .toArray();
}
