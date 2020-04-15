import * as types from '../contants/actionTypes';
import { Dispatch } from 'redux';
import Api from '../../services/api.service';
import { tokenHeader } from '../../mocks/token.mock';
import Token from '../../utils/token.util';
import { environment } from '../../environment/environment';
import { CourseModel } from '../../models/course.model';

export const getListCourse = () => (dispatch: Dispatch) => {
  return Api.get(
    { url: 'QuanLyKhoaHoc/LayDanhSachKhoaHoc' },
    (status: number, res: any) => {
      if (status === 200) {
        Token.setToken(
          environment.constants.access_token_variable_name,
          tokenHeader
        );
        dispatch({ type: types.GET_LIST_COURSE, payload: res });
      } else {
        console.error('Error get List Course');
      }
    }
  );
};

export const deleteCourse = (courseCode) => (dispatch: Dispatch) => {
  return Api.delete(
    {
      data: { MaKhoaHoc: courseCode },
      url: `QuanLyKhoaHoc/XoaKhoaHoc`,
      setHeader: true,
    },
    (status: number, res: any) => {
      if (status === 200) {
        dispatch({ type: types.DELETE_LIST_COURSE, payload: courseCode });
      } else {
        console.log(res);
      }
    }
  );
};

export const addCourse = (course: CourseModel) => (dispatch: Dispatch) => {
  return Api.post(
    {
      data: { course },
      url: 'QuanLyKhoaHoc/ThemKhoaHoc',
      setHeader: true,
    },
    (status: number, res: any) => {
      if (status === 200) {
        dispatch({ type: types.ADD_COURSE, payload: res });
      } else {
        console.error('Error in add Course');
      }
    }
  );
};
