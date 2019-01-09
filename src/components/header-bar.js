import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './header-bar.css';
import Button from './button';
import { logout as logoutAction } from '../actions/auth';

export function HeaderBar({ logout, user }) {
  // Only render the log out button if we are logged in
  let logOutButton;
  let name;
  if (user) {
    logOutButton = <Button onClick={() => logout()}>Log out</Button>;
    name = [user.firstName, user.lastName].join(' ') || user.username;
  }

  return (
    <nav className="HeaderBar">
      <NavLink
        to="/dashboard"
        className="HeaderBar_link"
        activeClassName="HeaderBar_link--active"
      >
        {name}
        <NavLink
          to="/history"
          className="HeaderBar_link"
          activeClassName="HeaderBar_link--active"
        >
          History
        </NavLink>
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
