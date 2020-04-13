import * as types from '../contants/actionTypes';
import { Dispatch } from 'redux';
import Api from '../../utils/app.util';

export const handleGetListCouser = (cb: (isSuccess) => void) => (
  dispatch: Dispatch
) => {
  Api.get(
    { data: '', url: 'QuanLyKhoaHoc/LayDanhSachKhoaHoc' },
    (status: number, res: any) => {
      if (status === 200) {
        dispatch({ type: types.GET_LIST_COUSER, payload: res.data });
        cb(true);
      } else {
        cb(false);
      }
    }
  );
};
