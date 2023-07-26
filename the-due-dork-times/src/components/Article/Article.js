import React from 'react'
import './Article.css'

function Article({ date, headline, description, image }) {

  const newDate = date.split('T')
  
  return(
    <div className='article-container'>
      <section className='article-details'>
        <p>{newDate[0]} </p>
        <h3>{headline}</h3>
        <p className='article-description'>{description}</p>
      </section>
      <img src={image} className='article-image'></img>
    </div>
  )
}

export default Article