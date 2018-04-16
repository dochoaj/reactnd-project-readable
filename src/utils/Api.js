import Axios from './ReadableAxios';

export default {
  fetchCategories: () => {
    return Axios.get('categories')
      .then(response => {
        return response.data.categories || [];
      });
  },
  fetchPosts: () => {
    return Axios.get('posts')
      .then(response => {
        return response.data || [];
      });
  }
}