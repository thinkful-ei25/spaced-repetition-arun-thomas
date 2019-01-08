import {
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR,
  POST_QUESTION_SUCCESS,
  POST_QUESTION_REQUEST,
  POST_QUESTION_ERROR,
  SESSION_CORRECT_INCREMENT,
  SESSION_INCORRECT_INCREMENT
} from '../actions/question';

const initialState = {
  question: {text: ''},
  error: null,
  loading: false,
  feedback: null,
  sessionCorrect: 0,
  sessionIncorrect: 0
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_QUESTION_SUCCESS) {
    return Object.assign({}, state, {
      question: action.question,
      error: null,
      feedback: null
    });
  } else if (action.type === FETCH_QUESTION_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === POST_QUESTION_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === POST_QUESTION_SUCCESS) {
    return Object.assign({}, state, {
      question: action.question,
      feedback: action.feedback
    });
  } else if (action.type === POST_QUESTION_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === SESSION_CORRECT_INCREMENT) {
    return Object.assign({}, state, {
      sessionCorrect: state.sessionCorrect + 1
    })
  } else if (action.type === SESSION_INCORRECT_INCREMENT) {
    return Object.assign({}, state, {
      sessionIncorrect: state.sessionIncorrect + 1
    })
  }
  return state;
}