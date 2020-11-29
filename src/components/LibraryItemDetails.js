import React from 'react';

/**
 *  DESCRIPTION: 
 *  FLOW: App => LibraryItemDetails
 *  PARENT: App
 *  CHILDREN: none
 */

function LibraryItemDetails({ year, director, plot }) {

  return (

    <div>
      <span>Year:{year} Director:{director}</span>
      <p>{plot}</p>
    </div>

  )

}


export default LibraryItemDetails;