import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = { userData: [] }

  async componentDidMount() {
    const response = await fetch('https://randomuser.me/api/?results=100');
    const resultJson = await response.json();
    console.log(resultJson.results);
    this.setState({ userData: resultJson.results });
  }

  render() {
    return (
      <div className="App">
        Initial
      </div>
    );
  }
}

export default App;
