import React from 'react';
import VideoListItem from '../component/video-list-items';

const VideoList = (props) => {
    const movieList = props.movieList;

    return ( 
        <div>
            <ul> {
                movieList.map(movie => {
                    return  <VideoListItem key={movie.id} movie={movie} />
                })             
            }
            </ul>
        </div>
    )

}
export default VideoList;