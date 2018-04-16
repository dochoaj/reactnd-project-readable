import React, { Component } from 'react';

export default class Post extends Component {
  render() {
    return (
      <div className='post'>
        <div className='title'>{this.props.title}</div>
        <div className='author'>{this.props.author}</div>
        <div className='comments'>{this.props.commentCount}</div>
        <div className='score'>{this.props.voteScore}</div>
        <div className='voting'>+1</div>
        <div className='actions'>Edit | Delete</div>
      </div>
    );
  }
}