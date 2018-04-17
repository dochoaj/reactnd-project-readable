import {
  FETCH_POST_COMMENTS_START,
  FETCH_POST_COMMENTS_COMPLETE,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
  DELETE_COMMENT,
  CREATE_COMMENT,
  UPDATE_COMMENT
} from '../actions';

const initialState = {
  data: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_COMMENTS_START:
      return {...state, loading: true};
    case FETCH_POST_COMMENTS_COMPLETE:
      return {...state, data: action.payload, loading: false};
    case UP_VOTE_COMMENT: {
      const newData = [...state.data];
      const index = state.data.findIndex(el => el.id === action.payload);
      newData[index]['voteScore'] += 1;
      return {...state, data: newData};
    }
    case DOWN_VOTE_COMMENT: {
      const newData = [...state.data];
      const index = state.data.findIndex(el => el.id === action.payload);
      newData[index]['voteScore'] -= 1;
      return {...state, data: newData};
    }
    case DELETE_COMMENT: {
      const newData = [...state.data];
      const index = state.data.findIndex(el => el.id === action.payload.id);
      newData[index]['deleted'] = true;
      return {...state, data: newData};
    }
    case CREATE_COMMENT: {
      const newData = [...state.data, action.payload];
      return {...state, data: newData};
    }
    case UPDATE_COMMENT: {
      const newData = [...state.data];
      const index = state.data.findIndex(el => el.id === action.payload.id);
      newData[index] = { ...newData[index], title: action.payload.title, body: action.payload.body}
      return {...state, data: newData};
    }
    default:
      return state
  }
}
