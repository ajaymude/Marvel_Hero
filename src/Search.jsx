import React, { useState } from 'react'
import "./index.css"

const Search = ({setSearch}) => {
    const [name, setName] = useState('');
 
    const searchChar = () => {
      setSearch(name);
  }
  return (
    <header>
    <div className='hero'>
    <div className='hero-banner'>
      <h4>Marvel Heroes</h4>
      <p>With Great Powers Come Great Responsibility</p>
      <input type='text' placeholder='' onChange={(e)=>{setName(e.target.value)}}className='input-bar' />
      <button className='hero-btn' onClick={searchChar}>Search</button>
      </div>
    </div>
    </header>
  )
}

export default Search
