import React from 'react'
import "./css/SearchBar.css";
import { IoSearch } from "react-icons/io5";

function SearchBar({props}) {
  return (
    <div className="search_bar">
        <input type="text" placeholder={props.placeholder_text} id={props.input_id}/>
        <IoSearch className='Search-icon'/>
    </div>
  )
}

export default SearchBar