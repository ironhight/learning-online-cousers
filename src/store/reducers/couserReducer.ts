import * as types from '../contants/actionTypes';

const initialState = {};

const couserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_LIST_COUSER:
      return action.payload;
    default:
      return state;
  }
};

export default couserReducer;
