const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://IDGAF:123@cluster0.of2c1uy.mongodb.net/shop?retryWrites=true&w=majority").then((data)=>{
console.log("connected")
}).catch((err) => {
    console.err(err)
})


app.listen(500,()=>{
    console.log("back end");
})