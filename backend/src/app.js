const express = require('express');

const app = express()                   // it creates server (not start server)


app.get('/',(req,res)=>{
    res.send("Hello world");
})

module.exports = app 