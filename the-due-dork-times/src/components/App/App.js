import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
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
        <Routes>
          <Route path='/' element={<ArticlesList articles={this.state.articles} />}/>

        </Routes>
      </>
    );
  }
}

export default App;
