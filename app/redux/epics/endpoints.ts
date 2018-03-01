import { CREATE_ENDPOINT, FETCH_ENDPOINTS, onCreateEndpoint, onFetchEndpoints } from '../actions/endpoints';
import { Epic } from '../redux.d';
import { AppState } from '../reducers/app';
import { filterByAction } from '../../utils/epics';
import { httpRequest } from '../../utils/async';

export const fetchEndpointsEpic: Epic<onFetchEndpoints, AppState> = (action$) => {
  return action$
    .filter(filterByAction(FETCH_ENDPOINTS))
    .chain(
      action =>
        httpRequest({ url: 'http://localhost:8090/api/endpoints' }, action)
    );
};

export const createEndpointEpic: Epic<onCreateEndpoint, AppState> = (action$) => {
  return action$
    .filter(filterByAction(CREATE_ENDPOINT))
    .chain(
      action =>
        httpRequest({ method: 'PUT', url: 'http://localhost:8090/api/endpoints', data: action.payload }, action)
    );
};
