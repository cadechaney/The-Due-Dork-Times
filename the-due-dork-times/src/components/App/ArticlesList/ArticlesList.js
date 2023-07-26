import React from 'react'
import './ArticlesList.css'
import Article from '../../Article/Article'

function ArticlesList({ articles }) {

  console.log('articleList', articles)

  const articlesList = articles.map((article, index) => (
    <Article key={index} author={article.author} />
  ))

  return(
      <div>
        {articlesList}
      </div>
   
  )
}

export default ArticlesList