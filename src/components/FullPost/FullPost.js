import React, { Component } from 'react';
import moment from 'moment';

export default class FullPost extends Component {
  render() {
    return (
      <div className='full-post'>
        <div className='title'>
          {this.props.title}
        </div>
        <div className='when'>
          Created by {this.props.author} on {moment(this.props.timestamp).format('L')}
        </div>
        <div className='body'>
          {this.props.body}
        </div>
        <div className='vote-info'>
          <div className='score'>{this.props.voteScore}</div>
          <div className='vote-controls'>
            <div className='voting-up' onClick={this.onUpVoteClick}>+1</div>
            <div className='voting-down' onClick={this.onDownVoteClick}>-1</div>
          </div>
        </div>
        <div className='data-row'>
          <div className='comments'>{this.props.commentCount}</div>
          <div className='actions'><span onClick={this.onEditClick}>Edit</span> | <span onClick={this.onDeleteClick}>Delete</span></div>
        </div>
      </div>
    );
  }
}