import React, { Component } from 'react';
import Header from './components/header'
import JobDetails from './components/jobDetails'
import Footer from './components/footer'
import './dino.css'
import Preview from './components/preview';
import InputField from './components/inputField';

class App extends Component {
  constructor(props){
    super(props) 
      this.state = {
      data: [],
      text: '',
      isHidden: true,
      isToggled: false
    }
    console.log('data: ', this.state.data)

  }

  componentDidMount() {
    fetch('./listing.json')
      .then(response => response.json())
      .then(response => this.setState({ data: response }))
  }

  inputValue = (event) => {
    this.setState({
      text : event.target.value
    })
  }



  render() {
    return (
      <div>
      <main>
        <Header />
        <JobDetails data={ this.state.data }/>
        <InputField onInput={this.inputValue}/>
        <Preview value={this.state.text}/>
        <Footer />
      </main>  
      </div>
    );
  }
}

export default App;
