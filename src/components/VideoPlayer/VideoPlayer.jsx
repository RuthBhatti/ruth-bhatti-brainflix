import React from 'react';
import './VideoPlayer.scss';

function VideoPlayer({ video }) {
    return (
        <div className="video-player">
            <section>
                <video className="video-player__player" controls poster={video.image}>
                    <source src={video.video} type="video/mp4" />
                </video>
            </section>
        </div>
    );
}

export default VideoPlayer;