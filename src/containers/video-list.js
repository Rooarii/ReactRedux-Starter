import React from 'react';
import VideoListItem from '../components/video-list-item'

const VideoList = ({movieList})=>{
    return (
        <di>
            <ul>
                {
                   movieList.map(movie =>{
                       return <VideoListItem key={movie.id} movie={movie}/>
                   })
                }
                
            </ul>
        </di>
    );
}

export default VideoList;