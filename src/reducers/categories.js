import {
  CATEGORIES_UPDATE_START, CATEGORIES_UPDATE_COMPLETE
} from '../actions';

const initialState = {
  data: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_UPDATE_START:
      return {...state, loading: true};
    case CATEGORIES_UPDATE_COMPLETE:
      return {...state, data: action.payload, loading: false};
    default:
      return state
  }
}
