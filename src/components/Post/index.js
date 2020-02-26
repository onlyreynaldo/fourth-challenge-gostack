import React from 'react';

import Comment from '../Comment';

export default function Post({ id, author, date, content, comments }) {
  return (
    <div className="post">
      <ul>
        <li key={id}>
          <div className="author">
            <img src={author.avatar} alt={author.name} className="avatar" />
            <div className="details">
              <span>{author.name}</span>
              <span>{date}</span>
            </div>
          </div>
          <p className="content-author">{content}</p>
          <div className="divider" />
          { comments.map(comment => <Comment key={comment.id} {...comment} />)}
        </li>
      </ul>
    </div>
  );
}
