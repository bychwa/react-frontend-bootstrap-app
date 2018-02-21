import { MiddlewareAPI } from 'redux';
import { Stream } from 'most';

export type Epic<A, S> = {
  (action$: Stream<A>, store: MiddlewareAPI<S>): Stream<A>;
};

export * from './app';
