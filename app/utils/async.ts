import { createAction, Action } from 'redux-actions';

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
