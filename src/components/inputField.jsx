import React, { Component } from 'react';


class InputField extends Component {
    render() {
        return (
            <div>
                <form id="application-input">
                    <label>Apply Here:</label>
                    <textarea id="application-text" rows="8" cols="100" ></textarea>
                    <input id="submit" type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default InputField