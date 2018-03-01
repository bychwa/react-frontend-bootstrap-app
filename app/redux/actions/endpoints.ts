import { createAction, Action } from 'redux-actions';

export const CREATE_ENDPOINT = 'endpoints/CREATE_ENDPOINT';
export type onCreateEndpoint = Action<any>;
export const onCreateEndpoint = createAction(CREATE_ENDPOINT);

export const FETCH_ENDPOINTS = 'endpoints/FETCH_ENDPOINTS';
export type onFetchEndpoints = Action<any>;
export const onFetchEndpoints = createAction(FETCH_ENDPOINTS);
