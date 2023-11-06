const express = require("express");

const {
    getMovies,
    getMovieByID,
    getMovieByName,
    deleteMovie,
    createMovie,
    updateMovie,
    changePlaceholder,
} = require("../controllers/movie.controller");

const MovieRouter = express.Router();
MovieRouter.get("/", getMovies);
MovieRouter.get("/byid/:id", getMovieByID);
MovieRouter.get("/byname/:name", getMovieByName);
MovieRouter.post("/", createMovie);
MovieRouter.patch("/:id", updateMovie);
MovieRouter.patch("/placeholder/:id", changePlaceholder);
MovieRouter.delete("/:id", deleteMovie);

module.exports = MovieRouter;
