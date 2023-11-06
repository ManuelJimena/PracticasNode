const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
        name: { type: String, enum: ["Action/Adventure", "Drama", "Romance", "Terror", "Western", "Fantasy/Science fiction", "Musical", "Thriller"] },
        available: { type: Boolean },
        movies: [{ type: mongoose.Types.ObjectId, ref: "movie" }],
    },
    {
        timestamps: tru,
    }
);

const Category = mongoose.model("category", CategorySchema);

module.exports = Category;
