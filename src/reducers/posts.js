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
    default:
      return state
  }
}
