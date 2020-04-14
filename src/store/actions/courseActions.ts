import * as types from '../contants/actionTypes';
import { Dispatch } from 'redux';
import Api from '../../services/api.service';

export const getListCourse = () => (dispatch: Dispatch) => {
  return Api.get('QuanLyKhoaHoc/LayDanhSachKhoaHoc')
    .then((res) => dispatch({ type: types.GET_LIST_COURSE, payload: res.data }))
    .catch((err) => console.error(err));
};
