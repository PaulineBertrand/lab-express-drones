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


router.get('/drones/:id([a-z0-9]{24})/edit', (req, res, next) => {
  const droneToUpdate = droneModel.findById(req.params.id)
    .then((droneToUpdate) => {
      res.render('drones/update-form.hbs', {droneToUpdate, title: "Update a drone", myCSS: "createForm.css"})
    })
    .catch((err) => console.log("Error when displaying the update form: ", err))
});

router.post('/drones/:id([a-z0-9]{24})/edit', (req, res, next) => {
  const updatedDrone = droneModel.findByIdAndUpdate(req.params.id, req.body)
    .then((updatedDrone) => res.redirect('/drones'))
    .catch(() => res.render('drones/update-form.hbs', {title: "Update a drone", myCSS: "createForm.css"}))
});

router.post('/drones/:id([a-z0-9]{24})/delete', (req, res, next) => {
  droneModel.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/drones'))
    .catch((err) => console.log("Error when deleting the drone: ", err))
});

module.exports = router;
