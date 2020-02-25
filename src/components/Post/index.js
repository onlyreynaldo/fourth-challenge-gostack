import React, { Component } from 'react';

import Comment from '../Comment';

// import { Container } from './styles';

export default class Post extends Component {
  render() {
    return (
      <div>
        <h3>Post</h3>
        <Comment />
      </div>
    );
  }
}
