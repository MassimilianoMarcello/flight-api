import express from 'express';
import flightControllers from '../controllers/flight.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();
const { getAllFlights , getFlightById, getAddFlightForm, addFlight} =
    flightControllers;



router.get('/flights',getAllFlights );

router.get('/flights/:id',getFlightById );

// give a form to add products
router.get('/add-flight',verifyToken, getAddFlightForm);

// add a product
router.post('/add-flight',addFlight );


export default router;