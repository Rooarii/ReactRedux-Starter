import React from 'react';
import VideoListItem from '../components/video-list-item'

const VideoList = (props)=>{
    const {movieList} = props;
    return (
        <di>
            <ul>
                {movieList.map(movie =>{
                    return <VideoListItem key={movie.id} movie={movie} callback={receiveCallBack}/>
                   })} 
            </ul>
        </di>
    );
    function receiveCallBack(movie){
        /***
         /console.log('--------')
        console.log('Parent :',movie);
        console.log('--------')***/
        props.callback(movie);
    }
}

export default VideoList;