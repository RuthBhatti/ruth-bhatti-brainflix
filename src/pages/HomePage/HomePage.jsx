import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MainVideo from '../../components/MainVideo/MainVideo';
import Sidebar from '../../components/Sidebar/Sidebar';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import TaxtArea from '../../components/TextArea/TextArea';
import Comments from '../../components/Comments/Comments';
import './HomePage.scss';

const API_URL = 'http://localhost:8000';

function HomePage() {
    const { videoId } = useParams();
    const [mainVideo, setMainVideo] = useState(null);
    const [sideVideos, setSideVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(`${API_URL}/videos`);
                setSideVideos(response.data);
            } catch (err) {
                console.error('Error fetching videos:', err);
            }
        };
        fetchVideos();
    }, []);

    useEffect(() => {
        const fetchVideoDetails = async () => {
            try {
                const response = await axios.get(`${API_URL}/videos/${videoId ? videoId : `84e96018-4022-434e-80bf-000ce4cd12b8`}`);
                setMainVideo(response.data);
            } catch (err) {
                console.error('Error fetching video details:', err);
            }
        };
        fetchVideoDetails();
    }, [videoId]);

    if (!mainVideo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="app">
            <VideoPlayer video={mainVideo} />
            <div className="view">
                <div className="app__content">
                    <MainVideo video={mainVideo} />
                    <TaxtArea />
                    <Comments comments={mainVideo.comments || []} />
                </div>
                <div className="app__details">
                    <Sidebar videos={sideVideos} currentVideoId={mainVideo.id} />
                </div>
            </div>
        </div>
    );
}

export default HomePage;