import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    const { username, email, isAdmin } = this.props;

    return (
      <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0' }}>
        <h3>User Profile</h3>
        <p><strong>Username:</strong> {username}</p>
        <p><strong>Email:</strong> {email}</p>
        <p>
          <strong>Role:</strong> {isAdmin ? 'Role: Administrator' : 'Role: User'}
        </p>
      </div>
    );
  }
}

export default UserProfile;
