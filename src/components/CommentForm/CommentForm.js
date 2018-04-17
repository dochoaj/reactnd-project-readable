import React, { Component } from 'react';

export default class PostForm extends Component {
  state = {
    body: '',
  }

  render() {
    return (
      <div className='add-post-form'>
        <div className='form-field'>
          <label>
            Content:
            <textarea required value={this.state.body} onChange={this.onBodyChange} />
          </label>
        </div>
        <button type='button' onClick={this.onCommentClick} disabled={this.shouldDisableButton()}>
          Comment
        </button>
      </div>
    );
  }

  shouldDisableButton() {
    const test = this.state.body && true;
    return !test;
  }

  onBodyChange = ({target}) => {
    const body = target.value;
    this.setState({ body });
  }

  onCommentClick = () => {
    this.props.onSave(this.state.body);
  }
}