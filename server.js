const express = require("express");
const app = express();


app.get('/api/get', (req,res) => {
    res.send({message:"hello to node welcome to node js  server" })
})


app.get('/api/get_user_details',(req,res) => {
    res.sed({
        user:{
            name:'stam',
            age:22,
            contact: 1234
        }
    })
})

app.listen(8080,()=> {
    console.log("lintening to 8080");
})