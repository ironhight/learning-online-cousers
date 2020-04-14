import { CourseModel } from '../../models/course.model';
import { ErrorModel } from '../../models/common/error.model';

export interface RootState {
  dashboard: AppState.DashboardState;
  course: AppState.CourseState;
}

export declare module AppState {
  export type DashboardState = {};
  export type CourseState = {
    data: CourseModel;
    error: ErrorModel;
    loading: boolean;
  };
}
