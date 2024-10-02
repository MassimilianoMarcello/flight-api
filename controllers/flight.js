import Flight from '../models/flight.js';

const flightControllers = {
    getAllFlights: (req, res) => {
        const flights = Flight.getAll();
        const token = req.cookies.token;
        res.status(200).render('layout', {
            title: 'Flights',
            body: 'includes/flights', // Body included product page
            flights,
            token
        });
    },

    getFlightById: (req, res) => {
        const flightId = req.params.id;
        const flight = Flight.getById(flightId); 
        const token = req.cookies.token;
        if (!flight) {
            return res
                .status(404)
                .render('404', {
                    title: 'Flight Not Found',
                    message: 'Flight Not Found.'
                });
        }
        res.render('layout', {
     title:flight.departure,
            body: 'includes/flight', 
            flight ,
           token
        });
    },
    getAddFlightForm: (req, res) => {
        const token = req.cookies.token;
        res.render('layout', {
            token,
            title: 'Add Flight', // Page title
            body: 'includes/addFlightForm' // Includes the adding form
        });
    },
    addFlight: (req, res) => {
        try {
            const { departure, time, arrive, price } = req.body;

            // Basic validation (optional)
            if (!departure || !time || !arrive || isNaN(price)) {
                return res.status(400).render('layout', {
                    title: 'Add Flight',
                    body: 'includes/addFlightForm',
                    error: 'All fields are required and price must be a number.'
                });
            }

            const newFlight = {
                departure,
                price: parseFloat(price),
                time,
                arrive
            };

            Flight.Add(newFlight); // Add the new flight to the system
            res.redirect('/api/flights');
        } catch (error) {
            res.status(500).render('500', { title: 'Server Error', message: 'Unable to add flight.' });
        }
    },



};

export default flightControllers;