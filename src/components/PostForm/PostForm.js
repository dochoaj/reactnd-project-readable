import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PostForm.css';

class PostForm extends Component {
  state = {
    title: '',
    description: '',
    category: '',
  }

  render() {
    return (
      <div className='add-post-form'>
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
        <div className='form-field'>
          <select value={this.state.category} onChange={this.onCategoryChange}>
            <option value=''>Select one</option>
            {this.buildSelectOptions()}
          </select>
        </div>
        <button type='button' onClick={this.onPublishClick} disabled={this.shouldDisableButton()}>
          Publish
        </button>
      </div>
    );
  }

  shouldDisableButton() {
    const test = this.state.title && this.state.description && this.state.category;
    return !test;
  }

  onTitleChange = ({target}) => {
    const title = target.value;
    this.setState({ title });
  }

  onDescriptionChange = ({target}) => {
    const description = target.value;
    this.setState({ description });
  }

  onCategoryChange = ({target}) => {
    const category = target.value;
    this.setState({ category });
  }

  onPublishClick = () => {
    this.props.onSave(this.state.title, this.state.description, this.state.category);
  }

  buildSelectOptions() {
    return this.props.categories.map(el => {
      return <option key={el.name} value={el.name}>{el.name}</option>
    });
  }
}

PostForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired
}

export default PostForm;