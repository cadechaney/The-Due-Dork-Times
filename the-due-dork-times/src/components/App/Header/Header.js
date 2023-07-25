import React from 'react'
import './Header.css'
import searchIcon from '../../../assets/searchIcon.png'

function Header() {
  return(
    <header>
      <section className='search-section'>
        <img src={searchIcon} className='search-icon' alt='search icon'></img>
        <input type='text' className='search-box'></input>
      </section>
      <section className='header-title'>
        <h1>The Due Dork Times: Smart News for All</h1>
      </section> 
    </header>
  )
}

export default Header