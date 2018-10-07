import React from 'react';

const JobDetails = (props) => {
    return(
        <div>
            <h2>Job Details</h2>
            <h4>{props.data.title}</h4>
            <p>{props.data.description}</p>
        </div>
    )
}

export default JobDetails