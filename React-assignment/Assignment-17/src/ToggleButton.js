import React, { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '15px 0', borderRadius: '5px' }}>
      <h3>Toggle Button</h3>
      <button
        onClick={handleToggle}
        style={{
          padding: '10px 20px',
          backgroundColor: isOn ? 'green' : 'red',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {isOn ? 'On' : 'Off'}
      </button>
      <p>State is currently: <strong>{isOn ? 'On' : 'Off'}</strong></p>
    </div>
  );
}

export default ToggleButton;
