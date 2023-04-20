const express = require('express');
const router = express.Router();
const Activity = require('../models/activityModel');
const Trip = require('../models/tripModel');

// Handle POST requests to /activities
router.post('/', async function(req, res, next) {
  const activityData = {
    name: req.body.name,
    description: req.body.description,
    date: req.body.date,
  }
  var activity = new Activity(activityData);
  try {
    var trip = await Trip.findById(req.body.tripId);
    trip.activities.push(activity);
    await trip.save();
  }
  catch (err) {
    return next(err);
  }
  res.redirect('/trips');
});

module.exports = router;
