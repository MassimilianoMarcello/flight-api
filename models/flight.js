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
    }

export default Flight