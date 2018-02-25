import { createAction, Action } from 'redux-actions';
import * as axios from 'axios';

import { fromPromise, just } from 'most';

export type AsyncAction<T, D> = Action<AsyncActionPayload<T, D>>;
export type AsyncActionPayload<T, D> = { trigger: Action<T>, data?: D, error?: boolean };

export const ASYNC_START = 'async/START';
export const ASYNC_FAIL = 'async/FAIL';
export const ASYNC_DONE = 'async/DONE';

export const startAsyncActionCreator = createAction<AsyncActionPayload<any, any>>(ASYNC_START);
export const doneAsyncActionCreator = createAction<AsyncActionPayload<any, any>>(ASYNC_DONE);
export const failAsyncActionCreator = createAction<AsyncActionPayload<any, any>>(ASYNC_FAIL);

type HOA<A> = Action<Action<A>>;

type ActionHandlerList = { [s: string]: any | HOA<any> };

export const asyncWrapper =
  <A>(hoc: ActionHandlerList) =>
    (state: A, action: Action<any>) =>
      hoc.hasOwnProperty(action.payload.trigger.type) ?
        hoc[action.payload.trigger.type](state, action) : state;

type Request = { options: axios.AxiosRequestConfig, tag: string };

export const asyncAction =
  <A, P>(promise: Promise<P>, trigger: Action<A>) =>
    just(startAsyncActionCreator({ trigger }))
      .concat(
      fromPromise(
        promise
          .then((data) => doneAsyncActionCreator({ data, trigger }))
          .catch(({ response }: axios.AxiosError) => doneAsyncActionCreator({ trigger, error: true, data: response ? response.data : null }))
      ));

export const httpRequest = <A>(options: axios.AxiosRequestConfig, action: Action<A>) =>
  asyncAction(
    axios.default(options)
      .then(({ data }) => data) as Promise<axios.AxiosResponse>,
    action);

export const httpRequestCombined = <A>(requests: Request[], action: Action<A>) =>
  asyncAction(
    axios
      .default
      .all(requests.map(_request => axios.default(_request.options)))
      .then((responses) =>
        responses.reduce((_responses, { data }, index) => ({ ..._responses, [requests[index].tag]: data }), {})
      ) as Promise<axios.AxiosResponse>,
    action);
