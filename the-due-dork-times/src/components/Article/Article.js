import React from 'react'
import './Article.css'
import { NavLink } from 'react-router-dom'

function Article({ id, date, headline, description, image, viewArticle }) {

  const newDate = date.split('T')
  
  return(
    <NavLink to={`/articles/${id}`} className='article-link'>
      <div className='article-container' id={id} onClick={() => viewArticle(id)}>
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

export default Article