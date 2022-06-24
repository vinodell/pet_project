import React from 'react';

import logo from './logo.svg';
import './App.css';
import Counter from './miniComponents/functionComponent'
import HelloComp from './miniComponents/reactComponent';
import Header from './movieMaker/header';

import {ErrorBoundary} from './movieMaker/error'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="magic">This is createElement</div>
        <div>this is React.component</div>
        <ErrorBoundary>
          <HelloComp name={"Vinodel"} master={"Dmitry White"} />
          <Counter />
          <Header />
        </ErrorBoundary>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
