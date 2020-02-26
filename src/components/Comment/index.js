import React from 'react';

export default function Comment({ id, author, content }) {
  return (
    <div className="comments-post">
      <ul>
        <li key={id} className="comment">
          <img src={author.avatar} alt={author.name} className="avatar" />
          <p>
            <span>{author.name}</span>
            {content}
          </p>
        </li>
      </ul>
    </div>
  );
}
