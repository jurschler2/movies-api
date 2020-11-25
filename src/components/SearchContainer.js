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
    console.log("These are the search results after the button is clicked:", searchResults);

  }

  async function handleAddToLibrary(title) {

    let seenMovie = await getSpecificMovieOMDB(title);
    dispatch(addMovieToAPI(seenMovie));

  }

  const renderSearchCards = () => {
  
      console.log("These are the search results:", searchResults);
  
      return (
        searchResults.map(m => (<SearchCard imdbID={m.imdbID} title={m.Title} poster={m.Poster} addToLibary={handleAddToLibrary}/>))
      )
  
  }


  return (

    <div>
      <SearchBar handleSearch={handleSearch} />
      <div>
        {!searchResults.length ? null : renderSearchCards()}
      </div>
    </div>

  )

}


export default SearchContainer;