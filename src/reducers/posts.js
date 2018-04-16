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
    default:
      return state
  }
}
