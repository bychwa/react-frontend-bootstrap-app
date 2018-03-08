import { createAction, Action } from 'redux-actions';

export const FETCH_STATS = 'dashboard/FETCH_STATS';
export type onFetchStats = Action<any>;
export const onFetchStats = createAction(FETCH_STATS);
