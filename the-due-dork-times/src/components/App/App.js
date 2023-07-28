import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import ArticlesList from './ArticlesList/ArticlesList'
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import MilkMovie from '../../assets/milkMovieAd.gif'
// import apiCall from '../../apiCalls/apiCalls';

import MockData from '../../MockData/mockData.json'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: MockData.articles,
      singleArticle: {},
      searchResult: [],
      err: ''
    }
  }

  // componentDidMount() {
  //   apiCall()
  //     .then(data => {
  //       this.setState({
  //         articles: data.articles
  //       })
  //     })
  //     .catch(() => {this.setState({err: 'Refresh Page'})})
  // }

  viewArticle = (id) => {
    const findArticle = this.state.articles.find((article, index) => index + 1 === id)
    this.setState({ singleArticle: findArticle }, () => {
      console.log(this.state.singleArticle)
    })
  }

  viewSearchArticle = (id) => {
    const findArticle = this.state.searchResult.find((article, index) => index + 1 === id)
    this.setState({ singleArticle: findArticle }, () => {
      console.log(this.state.singleArticle)
    })
  }

  searchResult = (searchResult) => {

    if(!searchResult) {
      console.log("Error, search is empty")
      return;
    }

    let lowerCaseValue = searchResult.toLowerCase()
    let searchArticleResult = this.state.articles.filter((article) => article.author.toLowerCase().includes(lowerCaseValue) || article.title.toLowerCase().includes(lowerCaseValue))
    this.setState({ searchResult: searchArticleResult}, () => {
      console.log(this.state.searchResult)
    })
  }

  render() {
    if(this.state.err === 'Refresh Page') {
      return (<h1>{this.state.err}</h1>)
    }

    return (
      <>
        <div className='advertisement'>
          <p>advertisement</p>
          <img src={MilkMovie} className='milk-ad'></img>
        </div>
        <Routes>
          <Route path='/article/:id' element={<ArticleDetails details={this.state.singleArticle} />} />
          <Route 
            path='/' 
            element={<ArticlesList 
            articles={this.state.articles} 
            viewArticle={this.viewArticle} 
            searchResult={this.searchResult}
            searchResultState={this.state.searchResult}
            viewSearchArticle={this.viewSearchArticle}
          />}/>
        </Routes>
      </>
    );
  }
}

export default App;
