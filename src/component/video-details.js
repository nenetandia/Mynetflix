import React from 'react';

const  VideoDetail = (props) => {
    const  title=props.title;
    const  overview=props.overview;
    return (
        <div>
            <h1>{title}</h1>
            <p>{overview}</p>
        </div>
    )
}
export default  VideoDetail;