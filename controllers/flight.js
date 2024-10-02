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
        const { departure, time, arrive, price } = req.body; // Estract data from form
        const newFlight = {
            departure,
           price: parseFloat(price),
            time,
            arrive
        };

        Flight.Add(newFlight); // Add a new flight
        res.redirect('/api/flights'); // redirect to all flights
    }
};

export default flightControllers;