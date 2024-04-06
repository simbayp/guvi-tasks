import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { hallRouter } from './allRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;

app.use('/', hallRouter);

app.listen(PORT, () => console.log('Server running on port ', PORT));
