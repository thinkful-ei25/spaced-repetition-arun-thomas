import {
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR
} from '../actions/question';

const initialState = {
  question: '',
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_QUESTION_SUCCESS) {
    return Object.assign({}, state, {
      question: action.question,
      error: null
    });
  } else if (action.type === FETCH_QUESTION_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}