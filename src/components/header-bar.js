import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import './header-bar.css';
import Button, { THEMES as buttonThemes } from './button';
import { logout as logoutAction } from '../actions/auth';

export function HeaderBar({ logout, user }) {
  const logOutButton = (
    <Button theme={buttonThemes.DANGER} onClick={() => logout()}>
      Log out
    </Button>
  );

  return (
    <nav className="HeaderBar">
      <Link to={user ? '/dashboard' : '/'} className="HeaderBar_link">
        <img
          src="logo-light.png"
          alt="Spaced Latency Logo"
          className="HeaderBar_logo"
        />
      </Link>

      {user && (
        <Fragment>
          <NavLink
            to="/"
            className="HeaderBar_link"
            activeClassName="HeaderBar_link--active"
          >
            Learn
          </NavLink>
          <NavLink
            to="/history"
            className="HeaderBar_link"
            activeClassName="HeaderBar_link--active"
          >
            History
          </NavLink>
          <NavLink
            to="/session-history"
            className="HeaderBar_link"
            activeClassName="HeaderBar_link--active"
          >
            Session History
          </NavLink>
          {logOutButton}
        </Fragment>
      )}
    </nav>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.currentUser,
});

const mapDispatchToProps = {
  logout: logoutAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderBar);
