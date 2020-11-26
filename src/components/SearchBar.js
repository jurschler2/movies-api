import React, { useState } from 'react';


/**
 *  DESCRIPTION: 
 *  FLOW: App => Search
 *  PARENT: App
 *  CHILDREN: none
 */

function SearchBar({ handleSearch }) {
  const INITIAL_STATE = { text: "" }
  const [formData, setFormData] = useState({ ...INITIAL_STATE })

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log("This is the handleSearch function:", handleSearch)
    handleSearch(formData.text);
    setFormData({ ...INITIAL_STATE });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="text"
          placeholder="Tenet"
          onChange={handleChange}
          value={formData.text} />
        <button name="search" >Search</button>
      </form>
    </div>);
}


export default SearchBar;