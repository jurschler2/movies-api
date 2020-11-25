import React from 'react';

/**
 *  DESCRIPTION: 
 *  FLOW: App => SearchCard
 *  PARENT: App
 *  CHILDREN: none
 */

function SearchCard({ imdbID, title, poster, addToLibrary }) {

  const handleSeen = evt => {
    evt.preventDefault();
    addToLibrary(imdbID);
  }

  return (

    <div>
      <div>
        <img src={poster} alt={poster} />
      </div>
      <div>
        {title}
      </div>
      <button onClick={handleSeen}>Seen?</button>
    </div>

  )

}


export default SearchCard;