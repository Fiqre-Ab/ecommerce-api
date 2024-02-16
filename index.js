// Require necessary modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute=require("./routes/user");

dotenv.config();

// Connect to MongoDB using mongoose
mongoose
    .connect(process.env.MONGO_URL).then((data) => {
        // Connection successful
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log(err)
    })
  
app.get("/api/user", (req, res) => {
    console.log("first page")
})
app.use(express.json());
app.use("/api/user",userRoute);
// Start the express server
app.listen(process.env.PORT || 5000, () => {
    // Server is listening on port 5000
    console.log("back server is running");
})