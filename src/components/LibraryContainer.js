import React from 'react';
import { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getMoviesFromAPI } from '../reducer/actions';
import LibraryItemCard from './LibraryItemCard';
import LibraryItemDetails from './LibraryItemDetails';

/**
 *  DESCRIPTION: 
 *  FLOW: App => LibraryContainer
 *  PARENT: App
 *  CHILDREN: none
 */

function LibraryContainer() {

  const movies = useSelector(store => Object.values(store.movies), shallowEqual);
  const INITIAL_STATE = {};
  const [movieDetails, setMovieDetails] = useState(INITIAL_STATE);
  const [expand, setExpand] = useState(false);
  const dispatch = useDispatch();

  useEffect(
    function fetchMovies() {
      dispatch(getMoviesFromAPI())
    }, [dispatch]
  );

  const handleExpandDetails = (imdbID, year, director, plot) => {

    let movie = {imdbID, year, director, plot};

    if (!expand) {
      setMovieDetails(movie);
      setExpand(true);
    } else if (expand && movieDetails.imdbID !== movie.imdbID) {
      setMovieDetails(movie);
    } else {
      setExpand(false);
      setMovieDetails(INITIAL_STATE);
    }

  }

  const renderMovies = () => {

    return movies.map(m => (
      <LibraryItemCard 
       imdbID={m.imdbID}
       title={m.title}
       year={m.year}
       director={m.director}
       plot={m.plot}
       poster={m.poster}
       upvote={m.upvote}
       downvote={m.downvote}
       handleExpandDetails={handleExpandDetails}/>
      )
    )
  }

  const renderExpandedDetails = () => {

    return (
      <LibraryItemDetails
        year={movieDetails.year}
        director={movieDetails.director}
        plot={movieDetails.plot}/>
    )

  }


  return (

    <div className="library-container">
      {!movies ? null : renderMovies()}
      {!expand ? null : renderExpandedDetails()}
    </div>

  )

}


export default LibraryContainer;