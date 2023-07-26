import React from 'react'
import './ArticlesList.css'
import Header from '../Header/Header'
import Article from '../../Article/Article'


function ArticlesList({ articles, viewArticle }) {

  console.log('articleList', articles)

  const articlesList = articles.map((article, index) => (
    <Article key={index + 1} id={index + 1} date={article.publishedAt} headline={article.title}  description={article.description} image={article.urlToImage} viewArticle={viewArticle} />
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