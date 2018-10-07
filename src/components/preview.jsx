import React from 'react';

const Preview = ({ value }) => {
    console.log('value: ', value)
    return(
    <div>
        <button id="application-toggle">Show Preview</button>
        <section id="application-preview" className="">{ value }</section>
    </div>
    )
}

export default Preview