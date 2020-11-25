import axios from "axios";
import { LOAD_MOVIES, ADD_MOVIE, UPVOTE_MOVIE, DOWNVOTE_MOVIE } from "./actionTypes";

const BASE_URL = "http://localhost:5000/";

export function loadMovies(movieData) {
  return {
    type: LOAD_MOVIES,
    movies: movieData
  }
}

export function addMovie(newMovie) {
  return {
    type: ADD_MOVIE,
    movie: newMovie
  }
}

export function upvoteMovie(id) {
  return {
    type: UPVOTE_MOVIE,
    imdbID: id
  }
}

export function downvoteMovie(id) {
  return {
    type: DOWNVOTE_MOVIE,
    imdbID: id
  }
}

export function getMoviesFromAPI() {
  return async function(dispatch) {

    try {

      let res = await axios.get(BASE_URL);
      let movieIDsToMovies = {};
      res.data.movies.forEach(m => movieIDsToMovies[m.imdbID] = m);
      dispatch(loadMovies(movieIDsToMovies));

    } catch (err) {

      console.log("Could not GET all movies");

    }

  }
}

export function addMovieToAPI(movieData) {
  return async function(dispatch) {

    try {

      let res = await axios.post(BASE_URL, movieData);
      dispatch(addMovie(res.data.movie));

    } catch (err) {

      console.log("Could not add a movie");

    }

  }
}

export function upvoteMovieInAPI(movieID) {
  return async function(dispatch) {

    try {

      let res = await axios.post(`${BASE_URL}/${movieID}/upvote`);
      if (res.data.upvote.upvote) dispatch(upvoteMovie(movieID));

    } catch (err) {

      console.log("Could not upvote a movie");

    }

  }
}

export function downvoteMovieInAPI(movieID) {
  return async function(dispatch) {

    try {

      let res = await axios.post(`${BASE_URL}/${movieID}/downvote`);
      if (res.data.downvote.downvote) dispatch(downvoteMovie(movieID));

    } catch (err) {

      console.log("Could not downvote a movie");

    }

  }
}