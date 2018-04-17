import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';

import './LitePost.css';

class LitePost extends Component {
  state = {
    editMode: false,
    title: this.props.title,
    description: this.props.body,
  }

  render() {
    return (
      <div className='post'>
        { this.state.editMode ? this.editMode() : this.showMode() }
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

  onUpdateClick = () => {
    this.props.update(this.props.id, this.state.title, this.state.body);
  }

  editMode() {
    return (
      <div className='edit'>
        <div className='edit-field'>
          <label>
            Title:
            <input type='text' required value={this.state.title} onChange={this.onTitleChange} />
          </label>
        </div>
        <div className='edit-field'>
          <label>
            Description:
            <textarea required value={this.state.description} onChange={this.onDescriptionChange} />
          </label>
        </div>
        <div className='actions'>
          <button onClick={this.onCancelClick}>Cancel</button> | <button onClick={this.onSaveClick} disabled={this.shouldDisableButton()}>Save</button>
        </div>
      </div>
    );
  }

  showMode() {
    return (
      <div className='show'>
        <div className='data-row'>
          <div className='main-info'>
            <div className='title'>{this.props.title}</div>
            <div className='when'>
              Created by {this.props.author} on {moment(this.props.timestamp).format('L')}
            </div>
          </div>
          <div className='vote-info'>
            <div className='score'>{this.props.voteScore}</div>
            <div className='vote-controls'>
              <div className='voting-up' onClick={this.onUpVoteClick}>+1</div>
              <div className='voting-down' onClick={this.onDownVoteClick}>-1</div>
            </div>
          </div>
        </div>
        <div className='data-row'>
          <div className={`body`}>
            {this.props.body}
          </div>
          <div className='read-more'>
              <Link to={`/${this.props.category}/${this.props.id}`}>Read more...</Link>
            </div>
        </div>
        <div className='data-row'>
          <div className='comments'>{this.props.commentCount}</div>
          <div className='actions'><span onClick={this.onEditClick}>Edit</span> | <span onClick={this.onDeleteClick}>Delete</span></div>
        </div>
      </div>
    );
  }

  onEditClick = () => {
    this.toggleEditMode();
  }

  onSaveClick = () => {
    this.toggleEditMode();
    this.props.edit(this.props.id, this.state.title, this.state.description);
  }

  onCancelClick = () => {
    this.toggleEditMode();
  }

  onTitleChange = ({target}) => {
    const title = target.value;
    this.setState({ title });
  }

  onDescriptionChange = ({target}) => {
    const description = target.value;
    this.setState({ description });
  }

  toggleEditMode() {
    this.setState({ editMode: !this.state.editMode });
  }

  shouldDisableButton() {
    const test = this.state.title && this.state.description;
    return !test;
  }
}

LitePost.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  vote: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

export default LitePost;