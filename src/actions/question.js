import { API_BASE_URL } from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const fetchQuestionSuccess = question => ({
  type: FETCH_QUESTION_SUCCESS,
  question
});

export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';
export const fetchQuestionError = error => ({
  type: FETCH_QUESTION_ERROR,
  error
});


export const POST_QUESTION_REQUEST = 'POST_QUESTION_REQUEST';
export const postQuestionRequest = () => ({
  type: POST_QUESTION_REQUEST
});

export const POST_QUESTION_SUCCESS = 'POST_QUESTION_SUCCESS';
export const postQuestionSuccess = ({question, feedback}) => ({
  type: POST_QUESTION_SUCCESS,
  question,
  feedback
});

export const POST_QUESTION_ERROR = 'POST_QUESTION_ERROR';
export const postQuestionError = error => ({
  type: POST_QUESTION_ERROR,
  error
});

export const STORE_LAST_ANSWER = 'STORE_LAST_ANSWER';
export const storeLastAnswer = (answer) => ({
  type: STORE_LAST_ANSWER,
  answer,
});

export const postQuestion = (answer) => (dispatch, getState) => {
  dispatch(postQuestionRequest());
  dispatch(storeLastAnswer(answer));

  const authToken = getState().auth.authToken;
  return (
    fetch(`${API_BASE_URL}/question`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify({
        answer,
        question: {id: getState().question.question.id}
      })
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((res) => dispatch(postQuestionSuccess(res)))
    .catch(err => {
        dispatch(postQuestionError(err));
    })  
  );
}

export const fetchQuestion = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/question`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(({question}) => dispatch(fetchQuestionSuccess(question)))
  .catch(err => {
      dispatch(fetchQuestionError(err));
  });
}
