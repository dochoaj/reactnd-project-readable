import React, { Component } from 'react';
import { ItemList, Category, Post, PostForm } from '../../components';
import './Main.css';

export default class Main extends Component {
  state = {
    postsSortedBy: {},
    sortSelectValue: 'no-order',
    isAddingPost: false,
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
            orientation='horizontal'
            data={this.props.categories.data}
            itemComponent={Category} />
        </div>
        <div className='posts'>
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
              itemComponent={Post} />
          </div>
        </div>
      </div>
    );
  }

  createPost = (title, body, category) => {
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
