import React from 'react';
import './UploadVideo.scss';

const UploadVideo = () => {
    return (
        <div className="upload-video">
            <header className="header">
                <div className="header__logo">
                    <img src="path/to/logo.png" alt="BrainFlix" />
                </div>
                <div className="header__search">
                    <input type="text" placeholder="Search" />
                </div>
                <button className="header__upload-btn">UPLOAD</button>
                <div className="header__profile">
                    <img src="path/to/profile-pic.jpg" alt="Profile" />
                </div>
            </header>
            <main className="upload-video__main">
                <h1>Upload Video</h1>
                <div className="upload-video__form">
                    <div className="upload-video__thumbnail">
                        <img src="path/to/thumbnail.jpg" alt="Video Thumbnail" />
                    </div>
                    <div className="upload-video__details">
                        <input type="text" placeholder="Add a title to your video" />
                        <textarea placeholder="Add a description to your video"></textarea>
                    </div>
                </div>
                <div className="upload-video__actions">
                    <button className="cancel-btn">CANCEL</button>
                    <button className="publish-btn">PUBLISH</button>
                </div>
            </main>
        </div>
    );
};

export default UploadVideo;
