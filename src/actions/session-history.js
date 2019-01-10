import { API_BASE_URL } from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_SESSION_HISTORY_REQUEST = 'FETCH_SESSION_HISTORY_REQUEST';
export const fetchSessionHistoryRequest = () => ({
  type: FETCH_SESSION_HISTORY_REQUEST
});

export const FETCH_SESSION_HISTORY_SUCCESS = 'FETCH_SESSION_HISTORY_SUCCESS';
export const fetchSessionHistorySuccess = (sessions) => ({
  type: FETCH_SESSION_HISTORY_SUCCESS,
  sessions
});

export const FETCH_SESSION_HISTORY_ERROR = 'FETCH_SESSION_HISTORY_ERROR';
export const fetchSessionHistoryError = (error) => ({
  type: FETCH_SESSION_HISTORY_ERROR,
  error
});

export const fetchSessionHistory = () => (dispatch, getState) => {
  dispatch(fetchSessionHistoryRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/history/sessions`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(({sessions}) => dispatch(fetchSessionHistorySuccess(sessions)))
  .catch(err => dispatch(fetchSessionHistoryError(err))
  );
}