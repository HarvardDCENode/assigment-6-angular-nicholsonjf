const express = require('express');
const router = express.Router();
const TripController = require('../../controllers/tripController');
const TripService = TripController.TripService;
const Trip = require('../../models/tripModel');

// Handle pre-flights, CORS.
router.use((req, res, next)=>{
    res.set({
    // allow any domain, allow REST methods we've implemented
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers",
    // Set content-type for all api requests
        'Content-type':'application/json'
    });
    if (req.method == 'OPTIONS'){
        return res.status(200).end();
    }
    next();
});

// Handle GET requests to /trips
router.get('/', async function(req, res, next) {
  try {
    var trips = await TripService.list();
  }
  catch (err) {
    return next(err);
  }
  // Respond with a JSON object containing all trips.
  res.status(200);
  res.send(JSON.stringify(trips));
});

// Handle get requests to /trips/:id
router.get('/:id', async function(req, res, next) {
    try {
      var trip = await TripService.find(req.params.id);
    }
    catch (err) {
      return next(err);
    }
    // Respond with a JSON object containing the found trip.
    res.status(200);
    res.send(JSON.stringify(trip));
  });

// Handle delete requests to /trips/:id
router.delete('/:id', async function(req, res, next) {
  try {
    var trip = await TripService.delete(req.params.id);
  }
  catch (err) {
    return next(err);
  }
  // Respond with a JSON object containing the deleted trip.
  res.status(200);
  res.send(JSON.stringify(trip));
});

router.post('/', async function(req, res, next) {
    const tripData = {
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate
    }
    if ( req.body.tripId ) {
        try {
            var trip = await TripService.find(req.body.tripId);
            trip.name = tripData.name;
            trip.description = tripData.description;
            trip.startDate = tripData.startDate;
            trip.endDate = tripData.endDate;
            await TripService.update(trip);
        }
        catch (err) {
            return next(err);
        }
    } else {
        try {
            var trip = await TripService.create(tripData);
        }
        catch (err) {
            return next(err);
        }
    }
    // Respond with a JSON object containing the new or updated trip.
    res.status(200);
    res.send(JSON.stringify(trip));
    });

module.exports = router;
