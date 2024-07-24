import React from 'react'
import Hlogo from "../accets/logo512.png";
import SearchBar from './SearchBar';
import "./css/Header.css"
import { Route, Routes } from 'react-router-dom';

function Header() {
  return (
    <div className="Dashboard-Content-box-header">
        <div className="logo-name">
            <img src={Hlogo} alt="School logo" className='Header-logo'/>
            <h2>Aarambh Public school</h2>
        </div>
        <div className="search_bar-profile">
            <Routes>
                <Route path="/Students" element={<SearchBar props={{placeholder_text:"Search Student", input_id:"Student-search-input"}}/>}/>
            </Routes>
            <div className="profile">
                  <img src={Hlogo} alt="profile" className='Profile-pic'/>
            </div>
        </div>
    </div>
  )
}

export default Header