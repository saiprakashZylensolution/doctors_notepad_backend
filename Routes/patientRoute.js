// routes/patientRoutes.js

const express = require('express');
const router = express.Router();
const patientController = require('../Controller/patientController');

// Create a new patient
router.post('/create', patientController.createPatient);

// Get all patients
router.get('/getAll', patientController.getPatients);

// Get a single patient by ID
router.get('/getById/:id', patientController.getPatientById);

// Update a patient
router.put('/update/:id', patientController.updatePatient);

// Delete a patient
router.delete('/delete/:id', patientController.deletePatient);

module.exports = router;
