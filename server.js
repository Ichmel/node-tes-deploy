const express = require("express");
const app = express();


app.get('/api/get', (req,res) => {
    res.send({message:"hello to node welcome to node js  server" })
})


app.listen(8080,()=> {
    console.log("lintening to 8080");
})