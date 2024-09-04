const mongoose = require('mongoose')

const patientschema = new mongoose.Schema({
    name:String,
    age:Number,
    gender:String,
    email:String,
    phone:String,
})

const patient = mongoose.model('Patient',patientschema);
module.exports =  patient;


