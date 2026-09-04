import React, { useState } from 'react';

function SignupControlled() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg(`Signup Successful for ${formData.username}!`);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '15px 0', borderRadius: '5px' }}>
      <h3>User Signup (Controlled Component)</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Username: </label><br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email: </label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password: </label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {msg && <p style={{ color: 'green' }}>{msg}</p>}
    </div>
  );
}

export default SignupControlled;
