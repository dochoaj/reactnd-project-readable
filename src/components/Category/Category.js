import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Category.css';

class Category extends Component {
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

Category.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Category;