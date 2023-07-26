import React from 'react'
import './ArticlesList.css'
import Header from '../Header/Header'
import Article from '../../Article/Article'


function ArticlesList({ articles }) {

  console.log('articleList', articles)

  const articlesList = articles.map((article, index) => (
    <Article key={index} date={article.publishedAt} headline={article.title}  description={article.description} image={article.urlToImage} />
  ))

  return(
    <>
      <Header />
      <section className='true-articles-container'>
        <div className='articles-list-container'>
          {articlesList}
        </div>
      </section>
    </>
   
  )
}

export default ArticlesList