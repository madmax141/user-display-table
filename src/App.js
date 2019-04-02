import React, { Component } from 'react';
import './App.css';
import UserTable from './UserTable';

class App extends Component {

  state = { userData: [], error: false, loading: true }

  async componentDidMount() {
    try {
      const response = await fetch('https://randomuser.me/api/?results=100');
      const resultJson = await response.json();
      this.setState({ userData: resultJson.results, loading: false });
    } catch(e) {
      this.setState({ error: true, loading: false });
    }
  }

  render() {
    const { error, userData, loading } = this.state;

    return (
      <div className="App">
        <UserTable 
          userData={userData} 
          loading={loading}
          error={error} 
        />
      </div>
    );
  }
}

export default App;
