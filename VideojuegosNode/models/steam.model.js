const mongoose = require("mongoose");

const SteamSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        description: { type: String, required: false },
        available: { type: Boolean, required: true},
        games: [{ type: mongoose.Types.ObjectId, ref: "videogame"}],
    },
    {
        timestamps: true,
    }
);

const Steam = mongoose.model("steam", SteamSchema);

module.exports = Steam;