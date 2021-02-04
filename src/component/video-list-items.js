import React from 'react';

const  VideoListItem = (props) => {
    const  movie=props.movie;
    
    return (
        <div>
            <li>films recommandés {movie}</li>
        </div>
    )
}
export default VideoListItem;