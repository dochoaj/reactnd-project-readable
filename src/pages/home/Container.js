import { connect } from 'react-redux';
import { fetchCategories, fetchPosts, votePost, deletePost, createPost, updatePost } from '../../actions';
import Main from './Main';

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories,
    posts: {
      loading: state.posts.loading,
      data: state.posts.data.filter(el => el.deleted === false),
    },
    currentUser: state.user.username,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchPosts: () => dispatch(fetchPosts()),
    votePost: (id, type) => dispatch(votePost(id, type)),
    deletePost: (id) => dispatch(deletePost(id)),
    createPost: (post) => dispatch(createPost(post)),
    updatePost: (post) => dispatch(updatePost(post)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);
