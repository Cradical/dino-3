import React, { Component } from 'react';
import Header from './components/header'
import JobDetails from './components/jobDetails'
import Footer from './components/footer'
import './dino.css'

class App extends Component {
  constructor(props){
    super(props) 
      this.state = {
      data: [],
      text: '',
      isHidden: true,
      isToggled: false
    }

  }

  componentDidMount() {
    fetch('./listing.json')
      .then(response => response.json())
      .then(response => {
        this.setState({ data: response })
        console.log
      })
      console.log(this.state.data)
  }



  render() {
    return (
      <div>
        <Header />
        <JobDetails />
        <Footer />
      </div>
    );
  }
}

export default App;
