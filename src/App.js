import React, { Component } from 'react';
import Header from './components/header'
import './dino.css'

class App extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
