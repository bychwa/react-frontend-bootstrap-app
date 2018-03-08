import { FETCH_STATS, onFetchStats } from '../actions/dashboard';
import { Epic } from '../redux.d';
import { AppState } from '../reducers/app';
import { filterByAction } from '../../utils/epics';
import { httpRequest } from '../../utils/async';

export const fetchStatsEpic: Epic<onFetchStats, AppState> = (action$) => {
  return action$
    .filter(filterByAction(FETCH_STATS))
    .chain(
      action =>
        httpRequest({ url: 'http://localhost:8090/api/endpoints/5aa16e1a5f47ea00250d2580/stats' }, action)
    );
};
