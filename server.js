const express = require('express'); 
const cors = require('cors');
require("dotenv").config(); 

const mongoose = require("mongoose");



const app = express(); 
const port = process.env.PORT || 5000; 
app.use(cors());
app.use(express.json()); 


// MongoDB 
const uriPW = process.env.DB_PW;
const username = process.env.DB_USERNAME;
const dbURI = `mongodb+srv://${username}:${uriPW}@fizzy.ol6cspb.mongodb.net/bars?retryWrites=true&w=majority`;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
db.once("open", () => {
  console.log("Connected to MongoDB database");
});


const barsRouter = require('./src/routes/bars');

app.use('/bars', barsRouter);






app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
