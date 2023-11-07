const Movie = require("../models/movie.model");

const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json(movies);
    } catch (error) {
        return res.status(404).json("Movies not found", error);
      }
};
 const getMovieByID = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findById(id);
        return res.status(200).json(movie);
    } catch (error) {
        return res.status(404).json("Movie not found", error);
    }
 };

 const getMovieByName = async (req, res) => {
    try {
        const { name } = req.params;
        const movie = await Movie.findOne({ name: name});
        return res.status(200).json(movie);
    } catch (error) {
        return res.status(404).json("Movie not found", error);
    }
 };

 const createMovie = async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        await newMovie.save();
        return res.status(201).json(newMovie);
    } catch (error) {
        return res.status(500).json("Failed creating movie", error);
    }
 };

 const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        await Movie.findByIdAndDelete(id);
        return res.status(200).json("Movie deleted");
    } catch (error) {
        return res.status(500).json("Failed deleting movie");
    }
 };

 const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const newMovie = new Movie(req.body);
        newMovie._id = id;
        await Movie.findByIdAndUpdate(id, newMovie);
        return res.status(200).json("Edited movie");
    } catch (error) {
        return res.status(500).json("Failed editing movie", error);
    }
 };

 const changePlaceholder = async (req, res) => {
    try {
        const { id } = req.params;
        const newMovie = new Movie({
            cover:"https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif"
        });
        newMovie._id = id;
        await Movie.findByIdAndUpdate(id, newMovie);
        return res.status(200).json("Placeholder added");
    } catch (error) {
        return res.status(500).json("Failed placeholder");
    }
 };

 module.exports = {
    getMovies,
    getMovieByID,
    getMovieByName,
    deleteMovie,
    createMovie,
    updateMovie,
    changePlaceholder,
 };
