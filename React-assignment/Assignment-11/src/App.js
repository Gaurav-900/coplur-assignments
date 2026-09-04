import React, { Component } from 'react';
import DataLoader from './DataLoader';
import UnmountChild from './UnmountChild';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChild: true
    };
  }

  toggleChild = () => {
    this.setState({ showChild: !this.state.showChild });
  };

  render() {
    return (
      <div style={{ width: '450px', margin: '20px auto', fontFamily: 'sans-serif' }}>
        <h1>Assignment 11 Lifecycle Demo</h1>
        
        <DataLoader />

        <div style={{ marginTop: '20px' }}>
          <button onClick={this.toggleChild}>
            {this.state.showChild ? 'Unmount Child Component' : 'Mount Child Component'}
          </button>
          {this.state.showChild && <UnmountChild />}
        </div>
      </div>
    );
  }
}

export default App;
