import React from 'react'
import './SearchArticle.css'
import { NavLink } from 'react-router-dom'

function SearchArticle({ id, date, headline, description, image, viewSearchArticle }) {

  const newDate = date.split('T')
  
  return(
    <NavLink to={`/article/${id}`} className='search-article-link'>
      <div className='search-article-container' id={id} onClick={() => viewSearchArticle(id)}>
        <section className='search-article-details'>
          <p>{newDate[0]} </p>
          <h3>{headline}</h3>
          <p className='search-article-description'>{description}</p>
        </section>
        <img src={image} className='search-article-image'></img>
      </div>
    </NavLink>
  )
}

export default SearchArticle