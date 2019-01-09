import React from 'react';
import { connect } from 'react-redux';
import { logout as logoutAction } from '../actions/auth';

export function HeaderBar({ logout, loggedIn }) {
  // Only render the log out button if we are logged in
  let logOutButton;
  if (loggedIn) {
    logOutButton = <button onClick={() => logout()}>Log out</button>;
  }
  return (
    <div className="header-bar">
      <h1>Latency Comparison Numbers</h1>
      {logOutButton}
    </div>
  );
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.currentUser !== null,
});

const mapDispatchToProps = {
  logout: logoutAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
