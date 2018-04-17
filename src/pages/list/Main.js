import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ItemList, Category, LitePost, PostForm } from '../../components';
import './Main.css';

class Main extends Component {
  state = {
    postsSortedBy: {},
    sortSelectValue: 'no-order',
    isAddingPost: false,
  }

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPosts(this.props.category);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.props.fetchPosts(this.props.category);
    }
  }

  render() {
    return (
      <div className='list-page'>
        <div className='categories'>
          <ItemList
            orientation='horizontal'
            data={[{name: 'all', path: ''} , ...this.props.categories.data]}
            itemComponent={Category} />
        </div>
        <div className='posts'>
          {
            this.props.category &&
            <div className='category-label'>
              Displaying posts for {this.props.category} category.
            </div>
          }
          <div className='controls'>
            <label>
              Sort by:
              <select value={this.state.sortSelectValue} onChange={this.onSortSelectChange}>
                <option value='no-order'>Default</option>
                <option value='timestamp-asc'>Older first</option>
                <option value='timestamp-desc'>Recent first</option>
                <option value='voteScore-asc'>Lowest rated first</option>
                <option value='voteScore-desc'>Highest rated first</option>
              </select>
            </label>
            <button type='button' onClick={this.onAddPostButtonClick}>Add Post</button>
          </div>
          <div className='content'>
            {
              this.state.isAddingPost &&
              <PostForm categories={this.props.categories.data} onSave={this.createPost} />
            }
            <ItemList
              sortBy={this.state.postsSortedBy}
              data={this.props.posts.data}
              injectProps={this.postInjectedProps()}
              itemComponent={LitePost} />
          </div>
        </div>
      </div>
    );
  }

  createPost = (title, body, category) => {
    this.setState({
      isAddingPost: !this.state.isAddingPost
    });

    return this.props.createPost({
      timestamp: Date.now(),
      title, body, category,
      author: this.props.currentUser,
    });
  }

  updatePost = (id, title, body) => {
    return this.props.updatePost({ id, title, body });
  }

  onAddPostButtonClick = () => {
    this.setState({
      isAddingPost: !this.state.isAddingPost
    });
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

  postInjectedProps() {
    return {
      vote: this.props.votePost,
      delete: this.props.deletePost,
      edit: this.updatePost,
    };
  }
}

Main.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  category: PropTypes.string,
  categories: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.array,
  }).isRequired,
  posts: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.array,
  }).isRequired,
  currentUser: PropTypes.string,
  updatePost: PropTypes.func.isRequired,
  votePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
}

export default Main;
