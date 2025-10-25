const express = require('express');
const aiRoutes = require('./routes/ai.routes');

const app = express()                   // it creates server (not start server)

app.use(express.json());              // to parse json body

app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.use('/ai',aiRoutes);

module.exports = app 