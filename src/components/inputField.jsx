import React, { Component } from 'react';

class InputField extends Component {

    constructor(props){
        super(props)
            this.state = {

            }  
    }

    handleSubmit = (event) => {
        event.preventDefault()
            this.props.onSubmit()
        }

    render() {
        return (
        <div>
                <form onSubmit={(event) => this.handleSubmit(event)} id="application-input">
                    <label>Apply Here:</label>
                    <textarea id="application-text" rows="8" cols="100" onChange={this.props.onInput}></textarea>
                    <input id="submit" type="submit" value="Submit"></input>
                </form>
                <p>display message</p>  
        </div>
        )
    }
}

export default InputField