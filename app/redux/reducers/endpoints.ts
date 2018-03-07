
import { FETCH_ENDPOINTS, CREATE_ENDPOINT } from '../actions/endpoints';
import { handleActions } from 'redux-actions';
import { ASYNC_START, ASYNC_DONE, asyncWrapper, AsyncAction } from '../../utils/async';
import { EndpointListResponse, RawEndpoint } from '../../utils/backend.d';
import { CREATE_STATUS } from '../../utils/constants';

export type EndpointsState = {
  endpoints: RawEndpoint[],
  loading: boolean,
  create_status: string
};

const initialState = { endpoints: [], loading: false, create_status: CREATE_STATUS.INIT } as EndpointsState;

const toLoadingState = (state: EndpointsState) => ({ ...state, loading: true });

const onCreateEndpointDone = (state: EndpointsState, _action: AsyncAction<any, EndpointListResponse>) => {
  return { ...state, loading: false, create_status: CREATE_STATUS.DONE };
};

const onFetchEndpointsDone = (state: EndpointsState, action: AsyncAction<any, EndpointListResponse>) => {
  if (action.payload && action.payload.data) {
    return {
      ...state,
      loading: false,
      endpoints: action.payload.data._data.map(e => (e._data))
    };
  } else {
    return state;
  }
};

export const endpoints = handleActions<EndpointsState>({
  [ASYNC_START]: asyncWrapper({
    [CREATE_ENDPOINT]: toLoadingState,
    [FETCH_ENDPOINTS]: toLoadingState
  }),
  [ASYNC_DONE]: asyncWrapper({
    [CREATE_ENDPOINT]: onCreateEndpointDone,
    [FETCH_ENDPOINTS]: onFetchEndpointsDone
  })
}, initialState);
