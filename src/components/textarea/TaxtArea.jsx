import React from 'react';
import './TaxtArea.scss'

function TaxtArea() {
    return (
        <>
            <h2 className="comments__header"> Comments  </h2>
            <div className="comments__section">
                <section className="comments">
                    <div className="comments__form-container">
                        <img src="./src/assets/Images/Mohan-muruge.jpg" alt="Artist-Image" className="comments__avatar" />
                        <form id="commentForm" className="comments__form">
                            {/* <label htmlFor="name" className="comments__label">Name</label> */}
                            {/* <input type="text" id="name" className="comments__input" placeholder="Enter your name" required /> */}
                            <label htmlFor="comment" className="comments__label">join the conversation</label>
                            <textarea id="comment" className="comments__textarea" placeholder="Add a new comment"
                                required></textarea>
                            <button type="submit" className="comments__button">Comment</button>
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