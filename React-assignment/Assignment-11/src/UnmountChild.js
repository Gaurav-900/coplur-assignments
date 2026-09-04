import React, { Component } from 'react';

class UnmountChild extends Component {
  componentWillUnmount() {
    alert("Bye");
  }

  render() {
    return (
      <div style={{ border: '1px solid blue', padding: '10px', marginTop: '10px' }}>
        <h3>I am a component that can be unmounted!</h3>
        <p>Click the button above to unmount me and trigger the Bye alert.</p>
      </div>
    );
  }
}

export default UnmountChild;
