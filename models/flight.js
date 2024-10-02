import {v4 as Id} from 'uuid';


const flights =[
    {
        id:Id(),
        departure: 'Milan',
        time: 13,
        arrive: 'Turin',
        price:155

    },
    {
        id:Id(),
        departure: 'Bologna',
        time: 17,
        arrive: 'Vienna',
        price:355

    },
    {   id:Id(),
        departure: 'Milan',
        time: 13,
        arrive: 'Turin',
        price:155

    },


]



class Flight {

    static getAll(){
        return flights
    }

    static getById(id){
        return flights.find( flight=> {return flight.id === id})

    }

    static Add(flight){
        const newFlight={
            id:Id(),
            ...flight}
            flights.push(newFlight)
            return flight
        }
   

        static deleteFlight(id) {
            const index = flights.findIndex(flight => flight.id === id); // Assicurati che l'ID sia una stringa
            if (index !== -1) {
                flights.splice(index, 1); // Rimuove il volo dall'array
                return true; // volo rimosso con successo
            }
            return false; // volo non trovato
        }
}

export default Flight