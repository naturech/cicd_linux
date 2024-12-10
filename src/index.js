const express = require("express");
const app= espress();
const port=3000;
app.get("/",(req,res) =>{
    res.send("<h1> Incheon national university !! </h1>");
});
app.listen(port,()=>{
    console.log('Example app listening at http://localhost:${port}');
});