import React, { Component } from 'react';
import moment from 'moment';

class Comment extends Component {
  state = {
    editMode: false,
    body: this.props.body,
  }

  render() {
    return (
      <div className='comment'>
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
    this.props.update(this.props.body);
  }

  editMode() {
    return (
      <div className='edit'>
        <div className='edit-field'>
          <label>
            Content:
            <textarea required value={this.state.body} onChange={this.onBodyChange} />
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
          <div className='when'>
            {this.props.author} on {moment(this.props.timestamp).format('L')} says:
          </div>
        </div>
        <div className='data-row'>
          <div className={`body`}>
            {this.props.body}
          </div>
        </div>
        <div className='data-row'>
          <div className='vote-info'>
            <div className='score'>{this.props.voteScore}</div>
            <div className='vote-controls'>
              <div className='voting-up' onClick={this.onUpVoteClick}>+1</div>
              <div className='voting-down' onClick={this.onDownVoteClick}>-1</div>
            </div>
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
    this.props.edit(this.props.id, this.state.body);
  }

  onCancelClick = () => {
    this.toggleEditMode();
  }

  onBodyChange = ({target}) => {
    const body = target.value;
    this.setState({ body });
  }

  toggleEditMode() {
    this.setState({ editMode: !this.state.editMode });
  }

  shouldDisableButton() {
    const test = this.state.body && true;
    return !test;
  }
}

export default Comment;