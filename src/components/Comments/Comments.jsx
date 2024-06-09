import React from 'react';
import './Comments.scss';

function Comments({ comments }) {
    if (!comments || comments.length === 0) {
        return <div>No comments available</div>;
    }

    return (
        <div className="comments">
            <h2 className="comments__title"></h2>
            <ul className="comments__list">
                {comments.map(comment => (
                    <li key={comment.id} className="comments__item">
                        <div className="comments__avatar"></div>
                        <div className="comments__content">
                            <div className="flex-date">
                                <p className="comments__name">{comment.name}</p>
                                <p className="comments__date">{new Date(comment.timestamp).toLocaleDateString()}</p>
                            </div>
                            <p className="comments__text">{comment.comment}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Comments;
