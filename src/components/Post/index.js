import React from 'react';

import Comment from '../Comment';

export default function Post({ data }) {
  return (
    <div className="post">
      <li key={data.id}>
        <div className="author">
          <img src={data.author.avatar} alt={data.author.name}/>
          <div className="details">
            <span>{data.author.name}</span>
            <span>{data.date}</span>
          </div>
        </div>
        <p className="content-author">{data.content}</p>
        <div className="divider" />
        <ul>
          { data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
        </ul>
      </li>
    </div>
  );
}
