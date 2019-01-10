import {
  FETCH_SESSION_HISTORY_REQUEST,
  FETCH_SESSION_HISTORY_SUCCESS,
  FETCH_SESSION_HISTORY_ERROR,
} from '../actions/session-history';

const initialState = {
  sessions: [],
  loading: false,
  error: null,
}

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_SESSION_HISTORY_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null,
    });
  } else if (action.type === FETCH_SESSION_HISTORY_SUCCESS) {
    return Object.assign({}, state, {
      sessions: action.sessions,
    });
  } else if (action.type === FETCH_SESSION_HISTORY_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
    });
  }
  return state;
}