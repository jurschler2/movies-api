import produce from "immer";
import { LOAD_MOVIES, ADD_MOVIE, UPVOTE_MOVIE, DOWNVOTE_MOVIE } from "./actionTypes";


/** 
 *  state = {} 
 */

const INITIAL_STATE = {movies: []};

const rootReducer = (state=INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {

      case LOAD_MOVIES:
        draft.movies = action.movies;
        break;

      case ADD_MOVIE:
        draft.movies[action.movie.imdbID] = action.movie;
        break;

      case UPVOTE_MOVIE:
        draft.movies[action.imdbID].upvote += 1;
        break;

      case DOWNVOTE_MOVIE:
        draft.movies[action.imdbID].downvote -= 1;
        break;

      default:
        return draft;

    }
  });

  export default rootReducer;