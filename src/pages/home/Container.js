import { connect } from 'react-redux';
import { fetchCategories, fetchPosts, votePost } from '../../actions';
import Main from './Main';

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories,
    posts: state.posts,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchPosts: () => dispatch(fetchPosts()),
    votePost: (id, type) => dispatch(votePost(id, type)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);
