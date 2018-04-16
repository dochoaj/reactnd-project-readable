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
  },
  votePost: (id, type) => {
    const option = type === 'up' ? 'upVote' : 'downVote';

    return Axios.post(`posts/${id}`, { option })
      .then(response => {
        return response.data;
      });
  }
}