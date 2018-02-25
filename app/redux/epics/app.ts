import { PING, PONG, onPing, onPong } from '../actions/app';
import { Epic } from '../redux.d';
import { AppState } from '../reducers/app';
import { filterByAction } from '../../utils/epics';
import { httpRequest } from '../../utils/async';

export const pingEpic: Epic<onPing, AppState> = (action$) => {
  return action$
    .filter(filterByAction(PING))
    .delay(2000)
    .chain(
      action =>
        httpRequest({ url: 'https://content.viaplay.se' }, action)
          .map(onPong)
          .until(action$.filter(filterByAction(PONG)))
    );
};
