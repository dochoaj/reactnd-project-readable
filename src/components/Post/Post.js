import React, { Component } from 'react';
import moment from 'moment';

export default class Post extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='post'>
        <div className='title'>{this.props.title}</div>
        <div className='author'>{this.props.author}</div>
        <div className='timestamp'>{moment(this.props.timestamp).format('L')}</div>
        <div className='comments'>{this.props.commentCount}</div>
        <div className='score'>{this.props.voteScore}</div>
        <div className='voting-up' onClick={this.upVote}>+1</div>
        <div className='voting-down' onClick={this.downVote}>-1</div>
        <div className='actions'>Edit | Delete</div>
      </div>
    );
  }

  upVote = () => {
    this.props.vote(this.props.id, 'up');
  }

  downVote = () => {
    this.props.vote(this.props.id, 'down');
  }
}