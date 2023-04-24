const express = require('express');
const router = express.Router();
const TripController = require('../controllers/tripController');
const TripService = TripController.TripService;
const Trip = require('../models/tripModel');

// Handle GET requests to /trips
router.get('/', async function(req, res, next) {
  try {
    var trips = await TripService.list();
  }
  catch (err) {
    return next(err);
  }
  // Render the template with the prepared variables.
  res.render('trips', {'trips': trips});
});

// Handle delete requests to /trips/:id
router.delete('/:id', async function(req, res, next) {
  try {
    var trip = await TripService.delete(req.params.id);
  }
  catch (err) {
    return next(err);
  }
  res.redirect('/trips');
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
  res.redirect('/trips');
});

module.exports = router;
