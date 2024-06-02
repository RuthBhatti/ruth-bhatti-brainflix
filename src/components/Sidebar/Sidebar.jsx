import React from 'react';
import './Sidebar.scss';

function Sidebar({ videos, currentVideoId, onVideoSelect }) {
    return (
        <div className="sidebar">
            <h2 className="sidebar__title">Next Videos</h2>
            <ul className="sidebar__list">
                {videos
                    .filter(video => video.id !== currentVideoId)
                    .map(video => (
                        <li key={video.id} className="sidebar__item" onClick={() => onVideoSelect(video.id)}>
                            <img src={video.image} alt={video.title} className="sidebar__thumbnail" />
                            <div className="sidebar__details">
                                <h3 className="sidebar__titles">{video.title}</h3>
                                <p className="sidebar__channel">{video.channel}</p>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default Sidebar;
