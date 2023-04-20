const mongoose = require("mongoose");
const activitySchema = require('./activityModel');

// Get access to Schema constructor
const Schema = mongoose.Schema;

// Create the trip schema
const tripSchema = new Schema({
  name: {type: String, required:true},
  description: {type: String, required:false},
  startDate: {type: Date, required:true},
  endDate: {type: Date, required:true},
  activities: [activitySchema.schema],
  createdAt: {type: Date},
  updatedAt: {type: Date}
});

tripSchema.pre('save', function(next){
  if (!this.createdAt){
    this.createdAt = new Date();
  }else{
    this.updatedAt = new Date();
  }
  next();
});

// Export the model with associated name and schema
module.exports = mongoose.model("Trip", tripSchema);