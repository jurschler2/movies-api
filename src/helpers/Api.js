/** Helper functions for external API interactions */

import axios from "axios";

const BASE_URL = "http://localhost:5000/";

async function getSearchResultsOMDB(title) {
  
  try {
    
    let results = await axios.get(`${BASE_URL}omdb/search/${title}`);
    console.log("These are the results of the API call to search:", results.data.movies);
    return results.data.movies;

  } catch (err) {

    console.log("Failed to search");

  }
}

async function getSpecificMovieOMDB(title) {

  try {

    let results = await axios.get(`${BASE_URL}omdb/${title}`);
    let movie = {
      imdbID: results.data.movie.imdbID,
      title: results.data.movie.Title,
      director: results.data.movie.Director,
      year: results.data.movie.Year,
      plot: results.data.movie.Plot || "",
      poster: results.data.movie.Poster || "",
    };
    return movie;

  } catch (err) {

    console.log("Failed to get a movie");

  }
}

export { getSearchResultsOMDB, getSpecificMovieOMDB }