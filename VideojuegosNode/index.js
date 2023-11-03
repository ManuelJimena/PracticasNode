const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const connect = require("./utils/db");
const Videogame = require("./models/videogame.model");
const Steam = require("./models/steam.model");

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
connect();

const router = express.Router();

router.get("/videogames", async (req, res) => {
    try {
        const videogames = await Videogame.find();
        return res.status(200).json(videogames);
    } catch (error) {
        return res.status(404).json("Products not found", error);
    }
});

router.post("/videogames", async (req, res) => {
    try {
        const newVideogame = new Videogame(req.body);
        await newVideogame.save();
        return res.status(201).json(newVideogame);
    } catch (error) {
        return res.status(500).json("failed creating product", error) ;       
    }
});

router.get("/steam", async (req, res) => {
    try {
        const steam = await Steam.find().populate("videogames");
        return res.status(200).json(steam);
    } catch (error) {
        return res.status(404).json("Steam not found", error);
    }
});

router.post("/steam", async (req, res) => {
    try {
        const newSteam = new Steam(req.body);
        await newSteam.save();
        return res.status(201).json(newSteam);
    } catch (error) {
        return res.status(500).json("Failed creating Steam", error)
    }
})


server.use("/", router);

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});