import React, { useState } from 'react'
import './Header.css'
import searchIcon from '../../../assets/searchIcon.png'

function Header({ searchResult }) {

  const [query, setQuery] = useState('')
  const handleSubmit = (query, event) => {
    event.preventDefault()
    // Function from App
    clearInputs()
  }

  const clearInputs = () => {
    setQuery('')
  }

  return(
    <header>
      <section className='search-section'>
        <img src={searchIcon} className='search-icon' alt='search icon' onClick={() => searchResult(query)}></img>
        <input 
          type='text' 
          className='search-box'
          placeholder='Search for Articles'
          name='query'
          value={query}
          onChange={event => setQuery(event.target.value)}
        ></input>
      </section>
      <section className='header-title'>
        <h1>The Due Dork Times: Smart News for All</h1>
      </section> 
    </header>
  )
}

export default Header