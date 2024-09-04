// controllers/prescriptionController.js

const Prescription = require('../Model/prescription');

// Create a new prescription
exports.createPrescription = async (req, res) => {
    try {
        const prescription = new Prescription(req.body);
        await prescription.save();
        res.status(201).json({
            message:'patient prescription saved',
            data: prescription
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all prescriptions
exports.getPrescriptions = async (req, res) => {
    try {
        const prescriptions = await Prescription.find().populate('patientId');
        res.status(200).json(prescriptions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single prescription by ID
exports.getPrescriptionById = async (req, res) => {
    try {
        const prescription = await Prescription.findById(req.params.id).populate('patientId');
        if (!prescription) {
            return res.status(404).json({ message: 'Prescription not found' });
        }
        res.status(200).json(prescription);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a prescription
exports.updatePrescription = async (req, res) => {
    try {
        const prescription = await Prescription.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!prescription) {
            return res.status(404).json({ message: 'Prescription not found' });
        }
        res.status(200).json(prescription);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a prescription
exports.deletePrescription = async (req, res) => {
    try {
        const prescription = await Prescription.findByIdAndDelete(req.params.id);
        if (!prescription) {
            return res.status(404).json({ message: 'Prescription not found' });
        }
        res.status(200).json({ message: 'Prescription deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
