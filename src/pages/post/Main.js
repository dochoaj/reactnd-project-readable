import React, { Component } from 'react';
import { FullPost, ItemList, CommentForm, Comment } from '../../components';
import uid from 'uid';

export default class Main extends Component {
  state = {
    postsSortedBy: {},
    sortSelectValue: 'no-order',
    isAddingComment: false,
  }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchComments(this.props.postId);
  }

  render() {
    return (
      <div className='post-page'>
        <FullPost {...this.props.post.data} />
        <div className='controls'>
          <label>
            Sort comments by:
            <select value={this.state.sortSelectValue} onChange={this.onSortSelectChange}>
              <option value='no-order'>Default</option>
              <option value='timestamp-asc'>Older first</option>
              <option value='timestamp-desc'>Recent first</option>
              <option value='voteScore-asc'>Lowest rated first</option>
              <option value='voteScore-desc'>Highest rated first</option>
            </select>
          </label>
          <button type='button' onClick={this.onAddCommentButtonClick}>Add Comment</button>
        </div>
        <div className='comments'>
          {
            this.state.isAddingComment &&
            <CommentForm onSave={this.createComment} />
          }
          <ItemList
            sortBy={this.state.postsSortedBy}
            data={this.props.comments.data}
            injectProps={this.commentInjectedProps()}
            itemComponent={Comment} />
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

  createComment = (body) => {
    this.setState({
      isAddingComment: !this.state.isAddingComment
    });

    return this.props.createComment({
      timestamp: Date.now(),
      body,
      id: uid(),
      parentId: this.props.postId,
      author: this.props.currentUser,
    });
  }

  commentInjectedProps() {
    return {
      vote: this.props.voteComment,
      delete: this.props.deleteComment,
      edit: this.updateComment,
    };
  }

  updateComment = (id, body) => {
    return this.props.updateComment({
      timestamp: Date.now(),
      id, body
    });
  }

  onAddCommentButtonClick = () => {
    this.setState({
      isAddingComment: !this.state.isAddingComment
    });
  }
}
