const mongoose = require("mongoose");

// Get access to Schema constructor
const Schema = mongoose.Schema;

// Create the activity schema
const activitySchema = new Schema({
  name: {type: String, required:true},
  description: {type: String, required:false},
  date: {type: Date, required:true},
  createdAt: {type: Date},
  updatedAt: {type: Date}
})

activitySchema.pre('save', function(next){
  if (!this.createdAt){
    this.createdAt = new Date();
  }else{
    this.updatedAt = new Date();
  }
  next();
});

// Export the model with associated name and schema
module.exports = mongoose.model("Activity", activitySchema);