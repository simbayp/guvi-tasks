// Design database for Zen class programme
const mongoose = require('mongoose');

// Access your MongoDB connection string from secrets
const mongoURI = process.env.MONGODB;

// Use mongoose to connect
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const classSchema = new mongoose.Schema(
  {
    users: {
      type: [String],
      required: true,
    },
    codekata: {
      type: String,
      required: true,
    },
    attendance: {
      type: Number,
      required: true,
    },
    topics: [String],
    tasks: [String],
    company_drives: [String],
    mentors: [String],
  },
  { timestamps: true }
);

const ZenClass = mongoose.model('ZenClass', classSchema);

// 1. Find all the topics and tasks taught in the month of October:
db.topics.find({
  _id: {
    $in: db.tasks.distinct('topic_id', {
      submission_date: {
        $gte: ISODate('2020-10-01T00:00:00Z'),
        $lt: ISODate('2020-11-01T00:00:00Z'),
      },
    }),
  },
});

// 2. Find all the company drives that occurred between 15-Oct-2020 and 31-Oct-2020:
db.company_drives.find({
  drive_date: {
    $gte: ISODate('2020-10-15T00:00:00Z'),
    $lte: ISODate('2020-10-31T23:59:59Z'),
  },
});

//3. Find all the company drives and students who appeared for placement:
db.company_drives.find().forEach(function (drive) {
  let students = db.attendance.find({
    date: drive.drive_date,
  });
  drive.students = students;
});

// 4. Find the number of problems solved by a user in CodeKata:
db.codekata.aggregate([
  {
    $match: { user_id: userId },
  },
  {
    $group: {
      _id: null,
      total_solved_problems: { $sum: '$solved_problems' },
    },
  },
]);

// 5. Find all the mentors with more than 15 mentees:
db.mentors.find({ mentee_count: { $gt: 15 } });

// 6. Find the number of users who were absent and did not submit a task between 15-Oct-2020 and 31-Oct-2020:
let absent = db.attendance.distinct('user_id', {
  status: 'absent',
  date: {
    $gte: ISODate('2020-10-15T00:00:00Z'),
    $lte: ISODate('2020-10-31T23:59:59Z'),
  },
});

let submittedTasks = db.tasks.distinct('user_id', {
  submission_date: {
    $gte: ISODate('2020-10-15T00:00:00Z'),
    $lte: ISODate('2020-10-31T23:59:59Z'),
  },
});

let result = db.users.count({
  _id: { $nin: absent },
  _id: { $nin: submittedTasks },
});
