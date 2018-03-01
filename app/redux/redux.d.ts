import { MiddlewareAPI } from 'redux';
import { Stream } from 'most';
export type Epic<A, S> = {
  (action$: Stream<A>, store: MiddlewareAPI<S>): Stream<A>;
};
import { AppState } from './reducers/app';
import { EndpointsState } from './reducers/endpoints';

type MainState = {
  app: AppState,
  endpoints: EndpointsState
};
