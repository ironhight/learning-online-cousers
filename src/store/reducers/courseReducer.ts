import * as types from '../contants/actionTypes';

const initialState = {};

const courseReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case types.GET_LIST_COURSE:
      // console.log(action.payload);
      return action.payload;

    case types.DELETE_LIST_COURSE:
      return state.filter((course) => course.maKhoaHoc !== course.payload);

    default:
      return state;
  }
};

export default courseReducer;
