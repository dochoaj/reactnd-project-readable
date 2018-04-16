import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Category extends Component {
  render() {
    return (
      <div className='category'>
        <Link to={`/${this.props.path}`}>
          {this.props.name}
        </Link>
      </div>
    )
  }
}