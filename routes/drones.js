const express = require('express');
const router = express.Router();

// require the Drone model here
const droneModel = require('./../models/Drone.model.js')

// trying the then/catch this time around

router.get('/drones', (req, res, next) => {
  const allDrones = droneModel.find()
  .then((allDrones) => {
    res.render('drones/list.hbs', { allDrones, myCSS: "drone-list.css" })
  })
  .catch((err) => console.log("Error when loading all drones: ", err))
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/createForm.hbs', {title: "Create a new drone", myCSS: "createForm.css"})
});

router.post('/drones/create', (req, res, next) => {
  droneModel.create(req.body)
  .then(() => res.redirect('/drones'))
  .catch((err) => console.log("Error when creating a new drone: ", err))
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
