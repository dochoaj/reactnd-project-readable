import { combineReducers } from 'redux';
import CategoriesReducer from './categories';
import PostsReducer from './posts';
import UserReducer from './user';
import CommentsReducer from './comments';

export default combineReducers({
  user: UserReducer,
  categories: CategoriesReducer,
  posts: PostsReducer,
  comments: CommentsReducer,
});
