import React from 'react';
import './Comments.scss';

function Comments({ comments }) {
    return (
        <div className="comments">
            <h2 className="comments__title">Comments</h2>
            <ul className="comments__list">
                {comments.map(comment => (
                    <li key={comment.id} className="comments__item">
                        <div className="comments__avatar"></div>
                        <div className="comments__content">
                            <p className="comments__name">{comment.name}</p>
                            <p className="comments__date">{new Date(comment.timestamp).toLocaleDateString()}</p>
                            <p className="comments__text">{comment.comment}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Comments;
