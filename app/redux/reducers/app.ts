import { PING, PONG } from '../actions/app';
import { handleActions } from 'redux-actions';

export type AppState = {
  isPinging: boolean
};

export const app = handleActions<AppState>({
  [PING]: () => ({ isPinging: true }),
  [PONG]: () => ({ isPinging: false })
}, { isPinging: false });
