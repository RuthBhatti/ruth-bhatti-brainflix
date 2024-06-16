import React from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

function Sidebar({ videos, currentVideoId, }) {
    return (
        <div className="sidebar">
            <h2 className="sidebar__title">Next Video</h2>
            <ul className="sidebar__list">
                {videos
                    .filter(video => video.id !== currentVideoId)
                    .map(video => (
                        <Link to={`/videos/${video.id}`} key={video.id}>
                            <li className="sidebar__item">
                                <img src={video.image} alt={video.title} className="sidebar__thumbnail" />
                                <div className="sidebar__details">
                                    <h3 className="sidebar__titles">{video.title}</h3>
                                    <p className="sidebar__channel">{video.channel}</p>
                                </div>
                            </li>
                        </Link>
                    ))}
            </ul>
        </div>
    );
}

export default Sidebar;
