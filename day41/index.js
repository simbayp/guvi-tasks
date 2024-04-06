import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { MongoClient } from 'mongodb';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('<h2>Server is running</h2>');
});

const createConnection = async () => {
  const client = new MongoClient(MONGO_URL);
  await client.connect();

  console.log(`Database connection stablished`);

  return client;
};

// add mentor
const client = await createConnection();

app.post('/create-mentor', async (req, res) => {
  const data = req.body;

  const result = await client
    .db('mentor-student')
    .collection('mentors')
    .insertOne(data);

  result.acknowledged
    ? res.status(200).send({ msg: 'Mentor created sucessfully' })
    : res.status(400).send({ msg: 'Error occured while creating mentor' });
});

// get all the mentors
app.get('/mentor-list', async (req, res) => {
  const result = await client
    .db('mentor-student')
    .collection('mentors')
    .find({})
    .toArray();

  res.send(result);
});

// add student
app.post('/create-student', async (req, res) => {
  const data = req.body;

  const result = await client
    .db('mentor-student')
    .collection('students')
    .insertOne(data);

  result.acknowledged
    ? res.status(200).send({ msg: 'Student added sucessfully' })
    : res.status(400).send({ msg: 'Error occured while adding student' });
});

// get all the students that are not assigned a mentor:
app.get('/unassigned-students', async (req, res) => {
  const result = await client
    .db('mentor-student')
    .collection('students')
    .find({ mentorAssigned: false })
    .toArray();

  res.send(result);
});

// get all the students that are assigned a mentor:
app.get('/assigned-students', async (req, res) => {
  const result = await client
    .db('mentor-student')
    .collection('students')
    .find({ mentorAssigned: true })
    .toArray();

  res.send(result);
});

// assign students to a mentor
app.post('/assign-mentor', async (req, res) => {
  const data = req.body;

  const result = await client
    .db('mentor-student')
    .collection('mentors')
    .updateOne(
      { mentorName: data.mentorName },
      { $set: { studentsAssigned: data.studentsAssigned } }
    );

  data.studentsAssigned.map(async (student) => {
    await client
      .db('mentor-student')
      .collection('students')
      .updateOne(
        { studentName: student },
        { $set: { mentorAssigned: true, mentorName: data.mentorName } }
      );
  });

  result.acknowledged
    ? res.status(200).send({ msg: 'Students assigned sucessfully' })
    : res.status(400).send({ msg: 'Error occured while assigning students' });
});

// update mentor list
app.post('/change-mentor', async (req, res) => {
  const data = req.body;

  await client
    .db('mentor-student')
    .collection('mentors')
    .updateOne(
      { mentorName: data.previousMentor },
      { $pull: { studentsAssigned: data.studentName } }
    );

  await client
    .db('mentor-student')
    .collection('students')
    .updateOne(
      { studentName: data.studentName },
      { $set: { mentorName: data.newMentor } }
    );

  const result = await client
    .db('mentor-student')
    .collection('mentors')
    .updateOne(
      { mentorName: data.newMentor },
      { $push: { studentsAssigned: data.studentName } }
    );

  result.acknowledged
    ? res.status(200).send({ msg: 'Mentor changed sucessfully' })
    : res.status(400).send({ msg: 'Error occured while changing mentor' });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
