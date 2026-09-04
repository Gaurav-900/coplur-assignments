import React, { Component } from 'react';

class DataLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading data... Please wait 3 seconds.</h2>;
    }

    return (
      <div style={{ border: '1px solid green', padding: '10px', marginTop: '10px' }}>
        <h2>Data Loaded Successfully!</h2>
        <p>Welcome to the main component content after 3 seconds of loading.</p>
      </div>
    );
  }
}

export default DataLoader;
