import React from 'react';
import './TaxtArea.scss';
import addCommentIcon from '../../assets/Icons/add_comment.svg';

function TaxtArea() {
    return (
        <>
            <h2 className="textarea__header"> 3 Comments  </h2>
            <div className="textarea__section">
                <section className="textarea">
                    <div className="textarea__form-container">
                        <img src="./src/assets/Images/Mohan-muruge.jpg" alt="Artist-Image" className="textarea__avatar" />
                        <form id="commentForm" className="textarea__form">
                            <div>
                                <label htmlFor="comment" className="textarea__label">join the conversation</label>
                                <textarea id="comment" className="textarea__textarea" placeholder="Add a new comment" required></textarea>
                            </div>
                            <button type="submit" className="textarea__button">
                                <img src={addCommentIcon} alt="Add Comment Icon" className="textarea__icon" />
                                <span>Comment</span>
                            </button>
                        </form>
                    </div>
                    <div id="commentsList" className="textarea__list"></div>
                </section>
            </div>
            <section className="textarea"></section>
        </>
    );
};

export default TaxtArea;
