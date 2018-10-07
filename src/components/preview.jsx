import React from 'react';

const Preview = ({ value }) => {
    console.log('value: ', value)
    return(
    <div>
        <section id="application-preview" className="">{ value }</section>
    </div>
    )
}

export default Preview