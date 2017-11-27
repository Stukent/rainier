import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/navbar';
import Content from './components/content';



class App extends Component {
  render() {
    return (
      <div className="main">
        <Navbar />
        <Content />

      </div>
    );
  }
}

export default App;
