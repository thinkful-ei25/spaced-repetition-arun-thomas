import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './landing-page.css';

import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
            <h2>Welcome to Latency Comparison Numbers!</h2>
            <p>Learn the latency numbers every programmer should know.</p>
            <p>Our learning app uses a spaced repetition algorithm that will boost your learning speed.</p>
            <p>Keep track of your learning history with a built in progress page. </p>
            <p>Create an account to get started!</p>
            <LoginForm />
            <Link to="/register">Register</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
