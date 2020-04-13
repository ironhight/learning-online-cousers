import { CouserModel } from '../../models/couser.model';
import { ErrorModel } from '../../models/common/error.model';

export interface RootState {
  dashboard: AppState.DashboardState;
  couser: AppState.CouserState;
}

export declare module AppState {
  export type DashboardState = {};
  export type CouserState = {
    data: CouserModel;
    error: ErrorModel;
    loading: boolean;
  };
}
