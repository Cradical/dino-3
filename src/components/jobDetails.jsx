import React from 'react';
import InputField from './inputField'

const JobDetails = (props) => {
    console.log('props: ', props)
    return(
        <main>
            <h2>Job Details</h2>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <InputField />
        </main>
    )
}

export default JobDetails