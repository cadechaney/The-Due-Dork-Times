import React, { Component } from 'react'
import './App.css';
import Header from './Header/Header'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

export default App;
