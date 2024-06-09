import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoUploadPage.scss';
import thumbnail from '../../assets/Images/Upload-video-preview.jpg';
import uploadIcon from '../../assets/Icons/publish.svg';

const API_URL = 'https://unit-3-project-api-0a5620414506.herokuapp.com';
const API_KEY = '4fe3ee20-bb66-44f7-a6d5-eaf3775e37bd';

function VideoUploadPage() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Video uploaded!');
        navigate('/');
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