import React, { useEffect, useState } from 'react';
import SearchBar from "./SearchBar";
import { getSearchResultsOMDB, getSpecificMovieOMDB } from "../helpers/Api" 
import { useDispatch } from 'react-redux';
import { addMovieToAPI } from '../reducer/actions';
import SearchCard from './SearchCard';

/**
 *  DESCRIPTION: 
 *  FLOW: App => SearchContainer
 *  PARENT: App
 *  CHILDREN: none
 */

function SearchContainer() {

  const INITIAL_STATE = []
  const [searchResults, setSearchResults] = useState(INITIAL_STATE);
  const dispatch = useDispatch();

  async function handleSearch(title) {

    let newSearch = await getSearchResultsOMDB(title);
    setSearchResults(newSearch);

  }

  async function addToLibrary(title) {

    let seenMovie = await getSpecificMovieOMDB(title);
    dispatch(addMovieToAPI(seenMovie));

  }

  const renderSearchCards = () => {
  
      return (
        searchResults.map(m => (<SearchCard imdbID={m.imdbID} title={m.Title} poster={m.Poster} addToLibrary={addToLibrary} />))
      )
  
  }

  console.log("This is the addToLibrary function in the searchContainer component:", addToLibrary);
  
  return (

    <div>
      <SearchBar handleSearch={handleSearch} />
      <div className="searchResults-container">
        {!searchResults.length ? null : renderSearchCards()}
      </div>
    </div>

  )

}


export default SearchContainer;