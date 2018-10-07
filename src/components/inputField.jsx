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
                    <textarea id="application-text" rows="8" cols="100" value={this.props.value} onChange={this.props.onInput}></textarea>
                    <input id="submit" type="submit" value="Submit"></input>
                    {this.props.msg_Display ? <p>Your application was submitted!</p> : null } 
                </form>
        </div>
        )
    }
}

export default InputField