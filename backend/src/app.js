const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express()                   // it creates server (not start server)


app.use(cors());                      // to handle cors error
app.use(express.json());              // to parse json body

app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.use('/ai',aiRoutes);

module.exports = app 