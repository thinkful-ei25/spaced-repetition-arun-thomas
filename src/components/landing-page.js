import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import './landing-page.css';

import Card from './card';
import LoginForm from './login-form';
import RegistrationForm from './registration-form';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <main className="LandingPage">
      <header className="LandingPage_header">
        <div className="LandingPage_titles">
          <h1 className="LandingPage_title">Spaced Latency</h1>
          <p className="LandingPage_subtitle">
            Learn the latency numbers that every programmer should know
          </p>
        </div>
        <div className="LandingPage_imageContainer">
          <img
            src="latency-blocks.png"
            alt="Latency numbers as blocks"
            className="LandingPage_image"
          />
        </div>
      </header>

      <Card className="LandingPage_features" element="section">
        <ul className="LandingPage_ul">
          <li className="LandingPage_feature">
            Use spaced repetition to boost your learning speed
          </li>
          <li className="LandingPage_feature">Track your progress over time</li>
        </ul>
      </Card>

      <Card element="section" className="LandingPage_login">
        <h2>Login to get started</h2>
        <Switch>
          <Route path="/register" component={RegistrationForm} />
          <Route component={LoginForm} />
        </Switch>
      </Card>
    </main>
  );
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(LandingPage);
