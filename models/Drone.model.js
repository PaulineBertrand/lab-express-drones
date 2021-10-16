const mongoose = require("mongoose");

const droneSchema = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
});

const droneModel = mongoose.model("drone", droneSchema);

module.exports = droneModel;


