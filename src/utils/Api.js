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
  },
  fetchPost: (id) => {
    return Axios.get(`post/${id}`)
      .then(response => {
        return response.data;
      });
  },
  deleteComment: (id) => {
    return Axios.delete(`comments/${id}`)
      .then(response => {
        return response.data;
      });
  },
  createComment: (comment) => {
    return Axios.post('comments', {...comment, id: uid()})
      .then(response => {
        return response.data;
      });
  },
  updateComment: (comment) => {
    return Axios.put(`comments/${comment.id}`, comment)
      .then(response => {
        return response.data;
      });
  },
  voteComment: (id, type) => {
    const option = type === 'up' ? 'upVote' : 'downVote';

    return Axios.post(`comments/${id}`, { option })
      .then(response => {
        return response.data;
      });
  },
  fetchPostComments: (id) => {
    return Axios.get(`posts/${id}/comments`)
      .then(response => {
        return response.data;
      });
  }
}