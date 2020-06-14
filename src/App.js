import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';
import Header from './components/HeaderComponent'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;