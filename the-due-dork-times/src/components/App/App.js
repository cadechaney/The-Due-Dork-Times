import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import ArticlesList from './ArticlesList/ArticlesList'
import ArticleDetails from '../ArticleDetails/ArticleDetails';

import MockData from '../../MockData/mockData.json'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: MockData.articles,
      singleArticle: {}
    }
  }

  viewArticle = (id) => {
    const findArticle = this.state.articles.find((article, index) => index + 1 === id)
    this.setState({ singleArticle: findArticle }, () => {
      console.log(this.state.singleArticle)
    })
    
  }

  render() {
    return (
      <>
        <Routes>
          <Route path='/article/:id' element={<ArticleDetails />} />
          <Route path='/' element={<ArticlesList articles={this.state.articles} viewArticle={this.viewArticle} />}/>
        </Routes>
      </>
    );
  }
}

export default App;
