import React from 'react';
import './MainVideo.scss';
import viewsIcon from '../../assets/Icons/views.svg';
import likesIcon from '../../assets/Icons/likes.svg';

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
                    <div className="main-video__stat">
                        <img src={viewsIcon} alt="Views Icon" className="main-video__icon" />
                        <p className="main-video__views">{video.views}</p>
                    </div>
                    <div className="main-video__stat">
                        <img src={likesIcon} alt="Likes Icon" className="main-video__icon" />
                        <p className="main-video__likes">{video.likes}</p>
                    </div>
                </div>
            </div>
            <p className="main-video__description">{video.description}</p>
        </div>
    );
}

export default MainVideo;
