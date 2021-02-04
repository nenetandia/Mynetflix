import React from 'react';
import VideoListItem from '../component/video-list-items';

const VideoList = () => {
    const movies=['film1',  'film2', 'film3', 'film4', 'film5',];
    return (
        <div>
            <ul> {
                movies.map(movie => {
                    return  <VideoListItem  color='red' movie={movie} />
                })             
            }
            </ul>
        </div>
    )

}
export default VideoList;