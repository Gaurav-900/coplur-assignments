import React, { useRef, useState } from 'react';

function LoginUncontrolled() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    setMsg(`Login Attempted for Email: ${email}`);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '15px 0', borderRadius: '5px' }}>
      <h3>User Login (Uncontrolled Component)</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email: </label><br />
          <input type="email" ref={emailRef} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password: </label><br />
          <input type="password" ref={passwordRef} required />
        </div>
        <button type="submit">Log In</button>
      </form>
      {msg && <p style={{ color: 'blue' }}>{msg}</p>}
    </div>
  );
}

export default LoginUncontrolled;
