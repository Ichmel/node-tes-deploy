const express = require("express");
const app = express();
require("dotenv").config


app.get('/api/get', (req,res) => {
    res.send({message:"hello to node welcome to node js  server" })
})


app.get('/api/get_user_details',(req,res) => {
    res.sed({
        user:{
            name:'stam',
            age:22,
            contact: 1234
        },env:process.env.NAME
    })
})

app.listen(process.env.PORT,()=> {
    console.log("lintening to 8000");
})