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
      msg_Display: false
    }
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

  togglePreviewBox = () =>{
    this.setState(prevState => ({
      isHidden : !prevState.isHidden
    }))
  }

  onSubmit = () => {
    this.setState({
      msg_Display : !this.submit_msg_Display,
      text: ""
    })
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <JobDetails data={ this.state.data }/>
          <InputField value={this.state.text} onInput={ this.inputValue } onSubmit={this.onSubmit} msg_Display={this.state.msg_Display}/>
          <button id="application-toggle" onClick={this.togglePreviewBox}>Show Preview</button>
          {!this.state.isHidden ? <Preview value={ this.state.text }/> : null }
        </main>  
        <Footer />
      </div>
    );
  }
}

export default App;
