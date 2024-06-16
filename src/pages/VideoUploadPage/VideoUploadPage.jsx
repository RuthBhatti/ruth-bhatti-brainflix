import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './VideoUploadPage.scss';
import thumbnail from '../../assets/Images/Upload-video-preview.jpg';
import uploadIcon from '../../assets/Icons/publish.svg';

const API_URL = 'http://localhost:8000';

function VideoUploadPage() {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const description = event.target.description.value;

        try {
            await axios.post(`${API_URL}/videos`, { title, description });
            alert('Video uploaded!');
            navigate('/');
        } catch (error) {
            console.error('Error uploading video:', error);
            alert('Failed to upload video. Please try again.');
        }
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="video-upload-page">
            <h1 className="video-upload-page__title">Upload Video</h1>

            <form className="video-upload-page__form" onSubmit={handleSubmit}>
                <section className="video-upload-page__form-container">
                    <div className="video-upload-page__thumbnail-container">
                        <label className="video-upload-page__thumbnail-label">Video Thumbnail</label>
                        <img src={thumbnail} alt="Video Thumbnail" className="video-upload-page__thumbnail" />
                    </div>
                    <div className="video-upload-page__input-container">
                        <label className="video-upload-page__label">Title your video
                            <input type="text" name="title" className="video-upload-page__input" placeholder="Add a title to your video" required />
                        </label>
                        <label className="video-upload-page__label">Add a video description
                            <textarea name="description" className="video-upload-page__textarea" placeholder="Add a description to your video" required></textarea>
                        </label>
                    </div>
                </section>
                <div className="video-upload-page__button-container">
                    <button type="submit" className="video-upload-page__button video-upload-page__button--publish">
                        <img src={uploadIcon} alt="Upload Icon" className="video-upload-page__upload-icon" />
                        Publish
                    </button>
                    <button type="button" className="video-upload-page__button video-upload-page__button--cancel" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default VideoUploadPage;