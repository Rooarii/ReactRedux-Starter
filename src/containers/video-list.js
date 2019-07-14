import React from 'react';
import VideoListItem from '../components/video-list-item'

const VideoList = ()=>{
    const movies = ["movie 1","movie 2","movie 3","movie 4","movie 5"]
    return (
        <di>
            <ul>
                {
                   movies.map(movie =>{
                       return <VideoListItem key={movie} movie={movie}/>
                   })
                }
                
            </ul>
        </di>
    );
}

export default VideoList;