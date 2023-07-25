import React, { Component } from 'react'
import './App.css';
import Header from './Header/Header'
import MockData from '../../MockData/mockData.json'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: [MockData]
    }
  }

  render() {
    console.log(this.state.articles[0].articles)
    return (
      <>
        <Header />
      </>
    );
  }
}

export default App;
