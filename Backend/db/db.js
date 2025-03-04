const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); // Middleware to parse JSON


const connectToDb = async () => {
  try {
    console.log("Loaded ENV Variables:", process.env);

    await mongoose.connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    console.log("DB Connection String:", process.env.DB_CONNECT);

  } catch (err) {
    console.error("MongoDB connection error:", err);
   
  }
};

module.exports = connectToDb;


