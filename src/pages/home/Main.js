import React, { Component } from 'react';
import { ItemList, Category, Post } from '../../components';

export default class Main extends Component {
  state = {
    postsSortedBy: {},
    sortSelectValue: 'no-order',
  }
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
          <select value={this.state.sortSelectValue} onChange={this.onSortSelectChange}>
            <option value='no-order'>Default</option>
            <option value='timestamp-asc'>Older first</option>
            <option value='timestamp-desc'>Recent first</option>
            <option value='voteScore-asc'>Lowest rated first</option>
            <option value='voteScore-desc'>Highest rated first</option>
          </select>
          <ItemList
            sortBy={this.state.postsSortedBy}
            data={this.props.posts.data}
            itemComponent={Post} />
        </div>
      </div>
    );
  }

  onSortSelectChange = (event) => {
    const sortSelectValue = event.target.value;
    if (sortSelectValue === 'no-order') {
      return this.setState({ sortSelectValue, postsSortedBy: {} });
    }

    const parsedValue = sortSelectValue.split('-');
    const postsSortedBy = { field: parsedValue[0], type: parsedValue[1] }

    this.setState({ postsSortedBy, sortSelectValue});
  }
}
