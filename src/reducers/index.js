import { combineReducers } from 'redux';
import CategoriesReducer from './categories';
import PostsReducer from './posts';

export default combineReducers({
  categories: CategoriesReducer,
  posts: PostsReducer,
});
