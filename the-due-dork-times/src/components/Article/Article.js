import React from 'react'
import './Article.css'

function Article({ date, headline, description, image }) {

  const newDate = date.split('T')
  
  return(
    <>
      <p>date: {newDate[0]} </p>
      <p>Title: {headline}</p>
      <p>description {description}</p>
      {/* <img src={image}></img> */}
    </>
  )
}

export default Article