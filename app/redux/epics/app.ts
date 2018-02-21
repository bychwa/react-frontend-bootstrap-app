import { PING, onPing, onPong } from '../actions/app';
import { Epic } from './';
import { AppState } from '../reducers/app';
import { filterByAction } from '../../utils/epics';

export const pingEpic: Epic<onPing, AppState> = (action$) => {
  return action$
    .filter(filterByAction(PING))
    .delay(1000) // Asynchronously wait 1000ms then continue
    .map(onPong);
};
