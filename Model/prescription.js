const mongoose = require('mongoose')

const prescriptionschema = new mongoose.Schema({
    drName:String,
    clinicName:Number,
    drId:String,
    prescriptionData:Buffer,
    patientId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient', 
        required: true
      },
})
const prescription = mongoose.model('prescription',prescriptionschema);
module.exports =  prescription;


