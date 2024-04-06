import express from 'express';
import {
  bookNewRoom,
  createNewRoom,
  getAllBookingDetails,
  getSingleCustomerBookingDetails,
} from './dbQuery.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.status(200).send('Status check OK');
  } catch (error) {
    res.status(500).send('Status check fail');
  }
});

router.post('/new/room', async (req, res) => {
  try {
    const room = req.body;
    await createNewRoom(room);
    res.status(200).send('new room created successfully');
  } catch (error) {
    res.status(500).send('error occured while creating new room');
  }
});

router.post('/new/room/booking', async (req, res) => {
  try {
    const bookingDetails = req.body;
    await bookNewRoom(bookingDetails);
    res.status(200).send('room booked successfully');
  } catch (error) {
    res.status(500).send('error occured while booking room');
  }
});

router.get('/booking/details', async (req, res) => {
  try {
    const bookingDetails = await getAllBookingDetails();
    res.status(200).send(bookingDetails);
  } catch (error) {
    res.status(500).send('error occured while fetching room details');
  }
});

router.get('/customer/bookingDetails/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const bookingDetails = await getSingleCustomerBookingDetails(name);
    res.status(200).send(bookingDetails);
  } catch (error) {
    res
      .status(500)
      .send('error occured while fetching room details of customer');
  }
});

export const hallRouter = router;
