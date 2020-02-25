import React from 'react';

import Comment from '../Comment';

export default function Post({ data }) {
  return (
    <li key={data.id}>
      <img src={data.author.avatar} alt={data.author.name}/>
      <h2>{data.author.name}</h2>
      <h3>{data.date}</h3>
      <h4>{data.content}</h4>
      <ul>
        { data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
      </ul>
    </li>
  );
}
