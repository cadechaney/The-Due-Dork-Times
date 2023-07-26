import React from 'react'
import { NavLink } from 'react-router-dom'
import './ArticleDetails.css'
import backArrow from '../../assets/backarrowIcon.png'

function ArticleDetails({ details }) {

  const newDate = details.publishedAt.split('T')
  const articleURL = details.url

  return (
    <div className='main-details-container'>
      <div className='details-box-container'>
        <section className='article-date-author'>
          <NavLink to='/' className='single-article-link'>
            <img src={backArrow} className='back-arrow-icon'></img>
          </NavLink>
          <div className='author-date'>
            <p>Published on: {newDate[0]}</p>
            <p>{details.author}</p>
          </div>
        </section>
        <section className='article-extra-details'>
          <img src={details.urlToImage} className='article-details-image'></img>
          <div className='title-url'>
            <p>{details.title}</p>
            <p><a href={articleURL}>Click here to visit original article</a></p>
          </div>
        </section>
        <section className='article-description-long'>
          <p>{details.content}</p>
        </section>
      </div>
    </div>
  )
}

export default ArticleDetails