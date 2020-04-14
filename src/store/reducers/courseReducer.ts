import * as types from '../contants/actionTypes';

const initialState = {};

const courseReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_LIST_COURSE:
      return action.payload;
    default:
      return state;
  }
};

export default courseReducer;
