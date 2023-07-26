import React, { Component } from 'react'
import './App.css';
import Header from './Header/Header'
import ArticlesList from './ArticlesList/ArticlesList'


import MockData from '../../MockData/mockData.json'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: MockData.articles
    }
  }

  render() {
    return (
      <>
        <Header />
        <ArticlesList articles={this.state.articles} />
      </>
    );
  }
}

export default App;
