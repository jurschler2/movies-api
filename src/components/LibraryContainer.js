import React from 'react';
import { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getMoviesFromAPI } from '../reducer/actions';
import LibraryItemCard from './LibraryItemCard';

/**
 *  DESCRIPTION: 
 *  FLOW: App => LibraryContainer
 *  PARENT: App
 *  CHILDREN: none
 */

function LibraryContainer() {

  const movies = useSelector(store => Object.values(store.movies), shallowEqual);
  const dispatch = useDispatch();

  useEffect(
    function fetchMovies() {
      dispatch(getMoviesFromAPI())
    }, [dispatch]
  );

  const renderMovies = () => {

    console.log("This is the redux state object:", movies);

    return movies.map(m => (
      <LibraryItemCard 
       imdbID={m.imdbID}
       title={m.title}
       poster={m.poster}
       upvote={m.upvote}
       downvote={m.downvote}/>
      )
    )
  }

  return (

    <div className="library-container">
      {!movies ? null : renderMovies()}
    </div>

  )

}


export default LibraryContainer;