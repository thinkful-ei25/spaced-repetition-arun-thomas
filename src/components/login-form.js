import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';

import './login-form.css';
import Button, { THEMES as buttonThemes } from './button';
import Input from './input';
import statelessWrapper from './stateless-wrapper';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="LoginForm_error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <form
        className="LoginForm"
        onSubmit={this.props.handleSubmit((values) => this.onSubmit(values))}
        id="login-form"
      >
        {error}
        <legend className="LoginForm_legend">Login to start learning</legend>
        <Field
          component={Input}
          type="text"
          name="username"
          id="username"
          label="Username"
          validate={[required, nonEmpty]}
        />
        <Field
          component={Input}
          type="password"
          name="password"
          id="password"
          label="Password"
          validate={[required, nonEmpty]}
        />
        <div className="LoginForm_controls">
          <Button
            disabled={this.props.pristine || this.props.submitting}
            theme={buttonThemes.SUCCESS}
          >
            Log in
          </Button>
          <Link to="/register">Register</Link>
        </div>
      </form>
    );
  }
}

/*
 * It is necessary to wrap our reduxForm component because it uses forwardRefs *
 * which are not supported by the current verison of React Router.
 * See: https://github.com/erikras/redux-form/issues/4318
 */
export default statelessWrapper(
  reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username')),
  })(LoginForm)
);
