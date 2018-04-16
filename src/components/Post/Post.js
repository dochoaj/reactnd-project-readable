import React, { Component } from 'react';
import moment from 'moment';

export default class Post extends Component {
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
      <div className='show'>
        <div className='form-field'>
          <label>
            Title:
            <input type='text' required value={this.state.title} onChange={this.onTitleChange} />
          </label>
        </div>
        <div className='form-field'>
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
        <div className='title'>{this.props.title}</div>
        <div className='author'>{this.props.author}</div>
        <div className='timestamp'>{moment(this.props.timestamp).format('L')}</div>
        <div className='comments'>{this.props.commentCount}</div>
        <div className='score'>{this.props.voteScore}</div>
        <div className='voting-up' onClick={this.onUpVoteClick}>+1</div>
        <div className='voting-down' onClick={this.onDownVoteClick}>-1</div>
        <div className='actions'><span onClick={this.onEditClick}>Edit</span> | <span onClick={this.onDeleteClick}>Delete</span></div>
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