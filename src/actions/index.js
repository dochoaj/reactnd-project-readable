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
