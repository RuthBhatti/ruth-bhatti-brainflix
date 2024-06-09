import React from 'react';
import './TextArea.scss';
import addCommentIcon from '../../assets/Icons/add_comment.svg';
import artistIcon from '../../assets/Images/Mohan-muruge.jpg'

function TaxtArea() {
    return (
        <>
            <h2 className="comments__header"> 3 Comments </h2>
            <div className="comments__section">
                <section className="comments">
                    <div className="textarea__form-container1">
                        <img src={artistIcon} alt="Artist-Image" className="textarea__avatar" />
                        <form id="commentForm" className="textarea__form3">
                            <div>
                                <label htmlFor="comment" className="textarea__label1">join the conversation</label>
                                <textarea id="comment" className="textarea__textarea2" placeholder="Add a new comment" required></textarea>
                            </div>
                            <button type="submit" className="textarea__button">
                                <img src={addCommentIcon} alt="Add Comment Icon" className="textarea__button-icon" />
                                COMMENT
                            </button>
                        </form>
                    </div>
                    <div id="commentsList" className="comments__list"></div>
                </section>
            </div>
            <section className="comments">
            </section>
        </>
    );
};

export default TaxtArea;
