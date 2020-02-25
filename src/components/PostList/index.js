import React, { Component } from 'react';

import Post from '../Post';

// import { Container } from './styles';

export default class PostList extends Component {
  render() {
    return (
      <div>
        <h2>PostList</h2>
        <Post />
      </div>
    );
  }
}
