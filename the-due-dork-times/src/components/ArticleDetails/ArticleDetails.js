import React from 'react'
import './ArticleDetails.css'

function ArticleDetails({ details }) {

  const articleURL = details.url

  return (
    <div className='main-details-container'>
      <div className='details-box-container'>
        <section className='article-date-author'>
          <p>Back</p>
          <div className='author-date'>
            <p>{details.publishedAt}</p>
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