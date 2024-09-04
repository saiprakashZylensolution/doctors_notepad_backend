const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const {PORT} = require('./Config/config.js');
const routes = require('./Routes/routes.js');
const {mongodb} = require('./Config/config.js')

const app = express()
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors())

app.use('/api',routes)

mongoose.connect(mongodb,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log('connected')
    app.listen(PORT,()=>{
        console.log('http://localhost:3001')
    })
}).catch((err)=>{
    console.log(err.message)
})