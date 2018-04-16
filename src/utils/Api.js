import uid from 'uid';
import Axios from './ReadableAxios';

export default {
  fetchCategories: () => {
    return Axios.get('categories')
      .then(response => {
        return response.data.categories || [];
      });
  },
  fetchPosts: (category) => {
    let promise;

    if (category) {
      promise = Axios.get(`${category}/posts`);
    } else {
      promise = Axios.get('posts');
    }

    return promise.then(response => {
      return response.data || [];
    });
  },
  votePost: (id, type) => {
    const option = type === 'up' ? 'upVote' : 'downVote';

    return Axios.post(`posts/${id}`, { option })
      .then(response => {
        return response.data;
      });
  },
  deletePost: (id) => {
    return Axios.delete(`posts/${id}`)
      .then(response => {
        return response.data;
      });
  },
  createPost: (post) => {
    return Axios.post('posts', {...post, id: uid()})
      .then(response => {
        return response.data;
      });
  },
  updatePost: (post) => {
    return Axios.put(`posts/${post.id}`, post)
      .then(response => {
        return response.data;
      });
  }
}