import React, { Component } from 'react';
import { ItemList, Category, Post } from '../../components';

export default class Main extends Component {
  componentWillMount() {
    this.props.fetchCategories();
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className='home'>
        <div className='categories'>
          <ItemList
            data={this.props.categories.data}
            itemComponent={Category} />
        </div>
        <div className='posts'>
          <ItemList
            data={this.props.posts.data}
            itemComponent={Post} />
        </div>
      </div>
    );
  }
}
