import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

class App extends Component {
  render() {
    return (
      <div className="App">
        <a className="start-btn" href="page/home/index.html">开启chat旅程</a>
      </div>
    );
  }
} 
ReactDOM.render(<App />, document.getElementById('root'));