
import { FETCH_STATS } from '../actions/dashboard';
import { handleActions } from 'redux-actions';
import { ASYNC_START, ASYNC_DONE, asyncWrapper, AsyncAction } from '../../utils/async';
import { EndpointListResponse } from '../../utils/backend.d';

export type DashboardState = {
  stats: { date: number, time: any}[],
  loading: boolean
};

const initialState = { stats: [], loading: false } as DashboardState;

const toLoadingState = (state: DashboardState) => ({ ...state, loading: true });

const onFetchEndpointsDone = (state: DashboardState, action: AsyncAction<any, EndpointListResponse>) => {
  if (action.payload && action.payload.data) {
    return {
      ...state,
      loading: false,
      stats: action.payload.data._data
    };
  } else {
    return state;
  }
};

export const dashboard = handleActions<DashboardState>({
  [ASYNC_START]: asyncWrapper({
    [FETCH_STATS]: toLoadingState
  }),
  [ASYNC_DONE]: asyncWrapper({
    [FETCH_STATS]: onFetchEndpointsDone
  })
}, initialState);
