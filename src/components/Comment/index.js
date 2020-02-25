import React from 'react';

export default function Comment({ data }) {
  return (
    <li key={data.id}>
      <img src={data.author.avatar} alt={data.author.name} />
      <strong>{data.author.name}</strong>
      <p>{data.content}</p>
    </li>
  );
}
