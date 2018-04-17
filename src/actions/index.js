import Api from '../utils/Api';

export const CATEGORIES_UPDATE_COMPLETE = 'CATEGORIES_UPDATE_COMPLETE';
export const CATEGORIES_UPDATE_START = 'CATEGORIES_UPDATE_START';

export function fetchCategories() {
  return (dispatch) => {
    dispatch({ type: CATEGORIES_UPDATE_START });
    Api.fetchCategories()
      .then(payload => {
        dispatch({ type: CATEGORIES_UPDATE_COMPLETE, payload });
      });
  }
}

export const POSTS_UPDATE_COMPLETE = 'POSTS_UPDATE_COMPLETE';
export const POSTS_UPDATE_START = 'POSTS_UPDATE_START';

export function fetchPosts(category = null) {
  return (dispatch) => {
    dispatch({ type: POSTS_UPDATE_START });
    Api.fetchPosts(category)
      .then(payload => {
        dispatch({ type: POSTS_UPDATE_COMPLETE, payload });
      });
  }
}

export const UP_VOTE_POST = 'UP_VOTE_POST';
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST';

export function votePost(id, type) {
  const voteType = type === 'up' ? UP_VOTE_POST : DOWN_VOTE_POST;

  return (dispatch) => {
    dispatch({ type: voteType, payload: id });
    Api.votePost(id, type);
  }
}

export const DELETE_POST = 'DELETE_POST';

export function deletePost(id, cb = null) {
  return (dispatch) => {
    dispatch({ type: DELETE_POST, payload: id });
    Api.deletePost(id)
      .then(() => {
        if (typeof cb === 'function') {
          cb();
        }
      });
  }
}

export const CREATE_POST = 'CREATE_POST';

export function createPost(post) {
  return (dispatch) => {
    Api.createPost(post)
      .then(payload => {
        dispatch({ type: CREATE_POST, payload })
      });
  };
}

export const UPDATE_POST = 'UPDATE_POST';

export function updatePost(post) {
  return (dispatch) => {
    dispatch({ type: UPDATE_POST, payload: post});
    Api.updatePost(post);
  };
}

export const FETCH_POST_START = 'FETCH_POST_START';
export const FETCH_POST_COMPLETE = 'FETCH_POST_COMPLETE';

export function fetchPost(id) {
  return (dispatch) => {
    dispatch({ type: FETCH_POST_START });
    Api.fetchPost(id)
      .then(payload => {
        dispatch({ type: FETCH_POST_COMPLETE, payload });
      });
  }
}

export const FETCH_POST_COMMENTS_START = 'FETCH_POST_COMMENTS_START';
export const FETCH_POST_COMMENTS_COMPLETE = 'FETCH_POST_COMMENTS_COMPLETE';

export function fetchComments(id) {
  return (dispatch) => {
    dispatch({ type: FETCH_POST_COMMENTS_START });
    Api.fetchPostComments(id)
      .then(payload => {
        dispatch({ type: FETCH_POST_COMMENTS_COMPLETE, payload });
      });
  }
}

export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT';
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT';

export function voteComment(id, type) {
  const voteType = type === 'up' ? UP_VOTE_COMMENT : DOWN_VOTE_COMMENT;

  return (dispatch) => {
    dispatch({ type: voteType, payload: id });
    Api.voteComment(id, type);
  }
}

export const DELETE_COMMENT = 'DELETE_COMMENT';

export function deleteComment(id) {
  return (dispatch) => {
    dispatch({ type: DELETE_COMMENT, payload: id });
    Api.deleteComment(id);
  }
}

export const CREATE_COMMENT = 'CREATE_COMMENT';

export function createComment(comment) {
  return (dispatch) => {
    Api.createComment(comment)
      .then(payload => {
        dispatch({ type: CREATE_COMMENT, payload })
      });
  };
}

export const UPDATE_COMMENT = 'UPDATE_COMMENT';

export function updateComment(comment) {
  return (dispatch) => {
    dispatch({ type: UPDATE_COMMENT, payload: comment});
    Api.updateComment(comment);
  };
}

