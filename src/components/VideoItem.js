import React from 'react'
import './VideoItem.css';

function VideoItem({ video, onVideoSelect }) {

    console.log(video)
    return (
        <div onClick={() => {
            onVideoSelect(video)
        }} className='video-item item'>
            <img src={video.snippet.thumbnails.high.url} alt={video.snippet.description} className='ui image' />

            <div className='content'>
                <div className='header'>{video.snippet.title}</div>

            </div>


        </div>
    )
}

export default VideoItem

