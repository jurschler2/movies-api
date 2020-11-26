import React from 'react';
import SearchContainer from "./SearchContainer";
import LibraryContainer from "./LibraryContainer";

/**
 *  DESCRIPTION: 
 *  FLOW: App => Home
 *  PARENT: App
 *  CHILDREN: none
 */

function Home() {

  return (

    <div>
      <SearchContainer />
      <LibraryContainer />
    </div>

  );

}


export default Home;