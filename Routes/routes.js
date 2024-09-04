const express = require('express')
const Router = express.Router()

const patients = require('./patientRoute')
const prescription = require('./prescriptionRoute')
Router.use('/patients',patients)
Router.use('/prescription',prescription)

module.exports = Router