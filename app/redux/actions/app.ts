import { createAction, Action } from 'redux-actions';
export const PING = 'app/PING';
export type onPing = Action<void>;
export const onPing = createAction(PING);

export const PONG = 'app/PONG';
export type onPong = Action<void>;
export const onPong = createAction(PONG);
