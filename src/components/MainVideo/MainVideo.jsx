import React from 'react';
import './MainVideo.scss';

function MainVideo({ video }) {
    return (
        <div className="main-video">
            <video className="main-video__player" controls poster={video.image}>
                <source src={video.video} type="video/mp4" />
            </video>
            <h1 className="main-video__title">{video.title}</h1>
            <div className="main-video__details">
                <div className="main-video__info">
                    <p className="main-video__channel">By {video.channel}</p>
                    <p className="main-video__timestamp">{new Date(video.timestamp).toLocaleDateString()}</p>
                </div>
                <div className="main-video__stats">
                    <p className="main-video__views">{video.views} views</p>
                    <p className="main-video__likes">{video.likes} likes</p>
                </div>
            </div>
            <p className="main-video__description">{video.description}</p>
        </div>
    );
}

export default MainVideo;
