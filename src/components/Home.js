import React from 'react';
import { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getMoviesFromAPI } from '../reducer/actions';
import SearchContainer from "./SearchContainer";

/**
 *  DESCRIPTION: 
 *  FLOW: App => Home
 *  PARENT: App
 *  CHILDREN: none
 */

function Home() {

  // const [isLoading, setIsLoading] = useState(true);
  const movies = useSelector(store => Object.values(store.movies), shallowEqual);
  const dispatch = useDispatch();

  useEffect(
    function fetchMovies() {
      dispatch(getMoviesFromAPI())
    }, [dispatch]
  );

  return (

    <div>
      <SearchContainer />
    </div>

  );

}


export default Home;