const express = require('express');
const router = express.Router();
const prescriptionController = require('../Controller/prescriptionController');

// Create a new prescription
router.post('/create', prescriptionController.createPrescription);

// Get all prescriptions
router.get('/getAll', prescriptionController.getPrescriptions);

// Get a single prescription by ID
router.get('/getById/:id', prescriptionController.getPrescriptionById);

// Update a prescription
router.put('/update/:id', prescriptionController.updatePrescription);

// Delete a prescription
router.delete('/delete/:id', prescriptionController.deletePrescription);

module.exports = router;
