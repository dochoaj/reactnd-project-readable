import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Main extends Component {
  render() {
    return (
      <div className='404'>
        <h1>404</h1>
        <p>
          <Link to=''>Go back home</Link>
        </p>
      </div>
    );
  }
}