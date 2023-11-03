//Paso 9
const mongoose = require("mongoose");
//Paso 10
const dotenv = require("dotenv");
dotenv.config();

//Paso 11
const MONGO_URI = process.env.MONGO_URI;

//Paso 12
const connect = async () => {
  try {
    const db = await mongoose.connect(MONGO_URI);
    const { name, host } = db.connection;
    console.log(`Connected to DB: ${name}, in host: ${host}`);
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
};
//Paso 13
module.exports = connect;
