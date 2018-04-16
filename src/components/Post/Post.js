import React, { Component } from 'react';
import moment from 'moment';

export default class Post extends Component {
  render() {
    return (
      <div className='post'>
        <div className='title'>{this.props.title}</div>
        <div className='author'>{this.props.author}</div>
        <div className='timestamp'>{moment(this.props.timestamp).format('L')}</div>
        <div className='comments'>{this.props.commentCount}</div>
        <div className='score'>{this.props.voteScore}</div>
        <div className='voting-up' onClick={this.onUpVoteClick}>+1</div>
        <div className='voting-down' onClick={this.onDownVoteClick}>-1</div>
        <div className='actions'><span>Edit</span> | <span onClick={this.onDeleteClick}>Delete</span></div>
      </div>
    );
  }

  onUpVoteClick = () => {
    this.props.vote(this.props.id, 'up');
  }

  onDownVoteClick = () => {
    this.props.vote(this.props.id, 'down');
  }

  onDeleteClick = () => {
    this.props.delete(this.props.id);
  }
}