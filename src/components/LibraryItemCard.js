import React from 'react';
import { useDispatch } from 'react-redux';
import { upvoteMovieInAPI, downvoteMovieInAPI } from '../reducer/actions';

/**
 *  DESCRIPTION: 
 *  FLOW: App => LibraryItemCard
 *  PARENT: App
 *  CHILDREN: none
 */

function LibraryItemCard({ imdbID, title, poster, upvote, downvote }) {

  const dispatch = useDispatch();

  const handleUp = evt => {
    evt.preventDefault();
    dispatch(upvoteMovieInAPI(imdbID));
  }
  const handleDown = evt => {
    evt.preventDefault();
    dispatch(downvoteMovieInAPI(imdbID));
  }

  return (

    <div className="searchCard">
      <div>
        <img src={poster} alt={poster} />
      </div>
      <div>
        {title}
      </div>
      <button onClick={handleUp}>{upvote} Up</button>
      <button onClick={handleDown}>{downvote} Down</button>
    </div>

  )

}


export default LibraryItemCard;