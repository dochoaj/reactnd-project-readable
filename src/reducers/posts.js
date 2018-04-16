const initialState = {
  data: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'POSTS_UPDATE_START':
      return {...state, loading: true};
    case 'POSTS_UPDATE_COMPLETE':
      return {...state, data: action.payload, loading: false};
    case 'UP_VOTE_POST': {
      const newData = [...state.data];
      const index = state.data.findIndex(el => el.id === action.payload);
      newData[index]['voteScore'] += 1;
      return {...state, data: newData};
    }
    case 'DOWN_VOTE_POST': {
      const newData = [...state.data];
      const index = state.data.findIndex(el => el.id === action.payload);
      newData[index]['voteScore'] -= 1;
      return {...state, data: newData};
    }
    case 'DELETE_POST': {
      const newData = [...state.data];
      const index = state.data.findIndex(el => el.id === action.payload);
      newData[index]['deleted'] = true;
      return {...state, data: newData};
    }
    case 'CREATE_POST': {
      const newData = [...state.data, action.payload];
      return {...state, data: newData};
    }
    case 'UPDATE_POST': {
      const newData = [...state.data];
      const index = state.data.findIndex(el => el.id === action.payload.id);
      newData[index] = { ...newData[index], title: action.payload.title, body: action.payload.body}
      return {...state, data: newData};
    }
    default:
      return state
  }
}
