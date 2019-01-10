import {
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR,
  POST_QUESTION_SUCCESS,
  POST_QUESTION_REQUEST,
  POST_QUESTION_ERROR,
  STORE_LAST_ANSWER,
  SESSION_CORRECT_INCREMENT,
  SESSION_INCORRECT_INCREMENT,
  RESET_QUESTION_STATE,
  QUESTION_HISTORY_REQUEST,
  QUESTION_HISTORY_SUCCESS,
  QUESTION_HISTORY_ERROR,
  POST_SESSION_REQUEST,
  POST_SESSION_SUCCESS,
  POST_SESSION_ERROR
} from '../actions/question';

const initialState = {
  question: {text: ''},
  error: null,
  loading: false,
  feedback: null,
  previousAnswer: null,
  sessionCorrect: 0,
  sessionIncorrect: 0,
  currentStreak: 0,
  questionHistory: [],
  currentSession: null,
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_QUESTION_SUCCESS) {
    return Object.assign({}, state, {
      question: action.question,
      error: null,
      feedback: null,
      prevousAnswer: null,
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
  } else if (action.type === STORE_LAST_ANSWER) {
    const { answer: previousAnswer } = action;
    return { ...state, previousAnswer };
  } else if (action.type === SESSION_CORRECT_INCREMENT) {
    return Object.assign({}, state, {
      sessionCorrect: state.sessionCorrect + 1,
      currentStreak: state.currentStreak + 1
    })
  } else if (action.type === SESSION_INCORRECT_INCREMENT) {
    return Object.assign({}, state, {
      sessionIncorrect: state.sessionIncorrect + 1,
      currentStreak: 0
    })
  } else if (action.type === RESET_QUESTION_STATE) {
    return initialState;
  } else if (action.type === QUESTION_HISTORY_REQUEST) {
    return Object.assign ({}, state, {
      loading: true,
      error: null
    })
  } else if (action.type === QUESTION_HISTORY_SUCCESS) {
    return Object.assign ({}, state, {
      questionHistory: action.questionHistory
    })
  } else if (action.type === QUESTION_HISTORY_ERROR) {
    return Object.assign ({}, state, {
      error: action.error
    })
  } else if (action.type === POST_SESSION_REQUEST) {
    return Object.assign ({}, state, {
      loading: true,
      error: null
    })
  } else if (action.type === POST_SESSION_SUCCESS) {
    return Object.assign ({}, state, {
      currentSession: action.res.session
    })
  } else if (action.type === POST_SESSION_ERROR) {
    return Object.assign ({}, state, {
      error: action.error
    })
  }
  return state;
}
