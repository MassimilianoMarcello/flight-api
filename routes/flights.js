import express from 'express';
import flightControllers from '../controllers/flight.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();
const { getAllFlights, getFlightById, getAddFlightForm, addFlight,deleteFlight } =
    flightControllers;

router.get('/flights', getAllFlights);

router.get('/flights/:id', getFlightById);

// give a form to add products
router.get('/add-flight', verifyToken, getAddFlightForm);

// add a flight
router.post('/add-flight', addFlight);

// delete a flight

router.delete('/delete/:id', deleteFlight);

export default router;
