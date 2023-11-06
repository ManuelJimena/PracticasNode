const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
    try {
        const db = await mongoose.connect(MONGO_URI);
        const { name, host} = db.connection;
        console.log(`Connected to DB: ${name}, in host:${host}`)
    } catch (error) {
        
    }
};

module.exports = connect;