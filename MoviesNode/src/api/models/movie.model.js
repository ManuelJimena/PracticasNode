const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
    {
        name: { type: String, trim: true, rquired: true },
        cover: { type: String, required: true, default:"https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif" },
        price: { type: Number, rquired: true },
        description: { type: String, required: false },
        genre: { type: String, enum: ["Action/Adventure", "Drama", "Romance", "Terror", "Western", "Fantasy/Science fiction", "Musical", "Thriller"]}
    },
    {
        timestamps: true,
    }
);

const Movie = mongoose.model("movie", MovieSchema);

module.exports = Movie;
