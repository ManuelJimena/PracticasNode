//Paso 1
const express = require("express");
//Paso 2
const dotenv = require("dotenv");
dotenv.config();
//Paso 14
const connect = require("./utils/db");
//Paso 20
const Zapatilla = require("./models/zapatilla.model");

//Paso 3
const server = express();
//Paso 5
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
//Paso 15
connect();

//Paso 4
const router = express.Router();

//ROUTES
//Paso 22
router.post("/create", async (req, res) => {
  try {
    const newZapatilla = new Zapatilla(req.body);
    console.log(newZapatilla);
    await newZapatilla.save();
    return res.status(201).json(newZapatilla);
  } catch (error) {
    return res.status(400).json("Error creating zapatilla", error);
  }
});
//Paso 21
router.get("/zapatillas", async (req, res) => {
  try {
    const zapatillas = await Zapatilla.find();
    return res.status(200).json(zapatillas);
  } catch (error) {
    return res.status(404).json("Zapatillas not found", error);
  }
});

//Paso 6
server.use("/", router);

//Paso 7
const PORT = process.env.PORT;

//Paso 8
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});