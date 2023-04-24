const Trip = require('../models/tripModel');

class TripService{
    //  list
    static async list() {
        try {
            var trips = await Trip.find({});
        }
        catch (err) {
            throw err;
        }
        return trips;
    }
  
    //  find
    static async find(id) {
        try {
            var trip = await Trip.findById(id);
        }
        catch (err) {
            throw err;
        }
        return trip;
    }
    //  create
    static async create(trip) {
        try {
            var trip = new Trip(trip);
            await trip.save();
        }
        catch (err) {
            throw err;
        }
        return trip;
    }
  
    //  update
    static async update(trip) {
        try {
            await trip.save();
        }
        catch (err) {
            throw err;
        }
        return trip;
    }
  
    //  delete
    static async delete(id) {
        try {
            var trip = await Trip.findByIdAndDelete(id);
        }
        catch (err) {
            throw err;
        }
        return trip;
    }
}
  
module.exports.TripService = TripService;