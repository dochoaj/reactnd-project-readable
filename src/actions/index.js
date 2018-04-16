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

export function fetchPosts() {
  return (dispatch) => {
    dispatch({ type: POSTS_UPDATE_START });
    Api.fetchPosts()
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

export function deletePost(id) {
  return (dispatch) => {
    dispatch({ type: DELETE_POST, payload: id });
    Api.deletePost(id);
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

