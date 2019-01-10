import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './header-bar.css';
import Button from './button';
import { logout as logoutAction } from '../actions/auth';

export function HeaderBar({ logout, user }) {
  // Only render the top bar if we're logged in
  if (!user) {
    return null;
  }

  const logOutButton = <Button onClick={() => logout()}>Log out</Button>;
  const name = [user.firstName, user.lastName].join(' ') || user.username;

  return (
    <nav className="HeaderBar">
      <NavLink
        to="/dashboard"
        className="HeaderBar_link"
        activeClassName="HeaderBar_link--active"
      >
        {name}
      </NavLink>
      <NavLink
        to="/history"
        className="HeaderBar_link"
        activeClassName="HeaderBar_link--active"
      >
        History
      </NavLink>
      {logOutButton}
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
