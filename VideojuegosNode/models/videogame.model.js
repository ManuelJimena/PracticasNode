const mongoose = require("mongoose");

const VideogameSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        //genre: { type: String, enum: ["Sandbox", "RPG", "Shooter", "Action/Adventure", "Simulation", "Puzzle"]},//
        releasedate: { type: Number, required: true, trim: true}
    },
    {
        timestamps: true,
    }
);

const Videogame = mongoose.model("videogame", VideogameSchema);

module.exports = Videogame;