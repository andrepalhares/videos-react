import './VideoItem.css'
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="item video">
            <img className="ui image" src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
                <div className="description">
                    {video.snippet.publishTime}
                </div>
            </div>
        </div>
    );
};

export default VideoItem;