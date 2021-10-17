const dronesArray = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

// copied from db/index.js

const mongoose = require("mongoose");
const droneModel = require('./../models/Drone.model.js')

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    const createSeed = droneModel.create(dronesArray)
    .then((seed) => {
        console.log(seed.length);
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error("Error creating the seed: ", err);
      });
    })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });


