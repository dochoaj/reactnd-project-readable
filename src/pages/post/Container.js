import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCategories, fetchPosts, votePost, updatePost, deletePost, fetchComments,
  createComment, voteComment, updateComment, deleteComment } from '../../actions';
import Main from './Main';

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.post_id;

  return {
    categories: state.categories,
    post: {...state.posts, data: state.posts.data.find(el => el.id === postId)},
    currentUser: state.user.username,
    category: ownProps.match.params.category,
    postId,
    comments: {...state.comments, data: state.comments.data.filter(el => !(el.deleted === true || el.parentDeleted === true))},
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchPosts: (id) => dispatch(fetchPosts()),
    votePost: (id, type) => dispatch(votePost(id, type)),
    updatePost: (post) => dispatch(updatePost(post)),
    deletePost: (id) => dispatch(deletePost(id)),
    fetchComments: (id) => dispatch(fetchComments(id)),
    voteComment: (id, type) => dispatch(voteComment(id, type)),
    updateComment: (comment) => dispatch(updateComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    createComment: (comment) => dispatch(createComment(comment)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));
