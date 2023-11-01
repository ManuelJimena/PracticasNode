const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const connect = require("./utils/db");

const Zapatilla = require("./models/zapatilla.model");


const server = express();

server.use(express.json());

server.use(express.urlencoded({ extended: false }));
connect();


const router = express.Router();

//Routes
router.post("/create", async (req, res) => {
  try {
    console.log(newZapatilla);
    await newZapatilla.save();
    return res.status(201).json(newZapatilla);
  } catch (error) {
    return res.status(400).json("Error creating zapatilla");
  }
});

router.get("/zapatillas", async (req, res) => {
  try {
    const zapatillas = await Zapatilla.find();
    return res.status(200).json(zapatillas);
  } catch (error) {
    return res.status(404).json("Zapatillas not found");
  }
});


server.use("/", router);


const PORT = process.env.PORT;


server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});