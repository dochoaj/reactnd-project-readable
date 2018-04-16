import { combineReducers } from 'redux';
import CategoriesReducer from './categories';
import PostsReducer from './posts';
import UserReducer from './user';

export default combineReducers({
  user: UserReducer,
  categories: CategoriesReducer,
  posts: PostsReducer,
});
