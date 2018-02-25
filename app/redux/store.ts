import * as _ from 'lodash';
import * as reducers from './reducers';
import * as epics from './epics';
import { getEnv } from '../utils/environment';
import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

const env = getEnv();

const adapter = require('redux-observable-adapter-most').default;

export const epicMiddlewares = _.values(epics).map(epic => applyMiddleware(createEpicMiddleware(epic as any, { adapter })));

const rootReducer = combineReducers(reducers);

const composeEnhancers =
  typeof window === 'object' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const storeMiddlewares = (env === 'local') ?
  composeEnhancers(...epicMiddlewares) :
  compose(...epicMiddlewares);

export const store = createStore(rootReducer, storeMiddlewares);
