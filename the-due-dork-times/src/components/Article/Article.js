import React from 'react'
import './Article.css'

function Article({ date, headline, description, image }) {



  return(
    <>
      <p>date: {date} </p>
      <p>Title: {headline}</p>
      <p>description {description}</p>
      <img src={image}></img>
    </>
  )
}

export default Article