const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const connect = require("./utils/db")

const server = express();

connect();

const  router = express.Router();

//Routes

server.use("/", router);

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});