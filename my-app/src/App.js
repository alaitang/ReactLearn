import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const className = this.props.className;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Update</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Morning
        </p>
        <div>
          <h1>This is the line update by module</h1>
          <h2 className={className}>morning</h2>
        </div>
        <div>
          <table>
            <tr>
              <td>Title</td>
              <td>{this.props.user.Title}</td>
            </tr>
              <tr>
                <td>Name</td>
                <td>{this.props.user.Name}</td>
              </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
