import React from 'react'
import './SearchArticle.css'
import { NavLink } from 'react-router-dom'

function SearchArticle({ id, date, headline, description, image, viewSearchArticle }) {

  const newDate = date.split('T')
  
  return(
    <NavLink to={`/article/${id}`} className='article-link'>
      <div className='article-container' id={id} onClick={() => viewSearchArticle(id)}>
        <section className='article-details'>
          <p>{newDate[0]} </p>
          <h3>{headline}</h3>
          <p className='article-description'>{description}</p>
        </section>
        <img src={image} className='article-image'></img>
      </div>
    </NavLink>
  )
}

export default SearchArticle