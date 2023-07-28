import React from 'react'
import './ArticlesList.css'
import Header from '../Header/Header'
import Article from '../../Article/Article'
import SearchArticle from '../../SearchArticle/SearchArticle'

function ArticlesList({ articles, viewArticle, searchResult, searchResultState, viewSearchArticle }) {

  const articlesList = articles.map((article, index) => (
    <Article key={index + 1} id={index + 1} date={article.publishedAt} headline={article.title}  description={article.description} image={article.urlToImage} viewArticle={viewArticle} />
  ))

  const searchedArticles = searchResultState.map((article, index) => (
    <SearchArticle key={index + 1} id={index + 1} date={article.publishedAt} headline={article.title}  description={article.description} image={article.urlToImage} viewSearchArticle={viewSearchArticle} />
  ))

  return(
    <>
      <Header searchResult={searchResult} />
      <section className='true-articles-container'>
        <div className='articles-list-container'>
          {searchResultState.length === 0 ? (
            articlesList
          ) : (
            <div className='searched-articles-container'>
              <p>Search Results:</p>
              {searchedArticles.length === 0 ? (
                <p>No search results found.</p>
              ) : (
                searchedArticles
              )}
            </div>
          )}
        </div>
      </section>
    </>
   
  )
}

export default ArticlesList