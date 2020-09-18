import React from 'react';
import logo from './two-mountains.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>coming soon!</code>
        </p>
        {/* <a
          className="App-link"
          href="https://www.youtube.com/watch?v=g8sX6wZHhD0&ab_channel=MacMiller"
          target="_blank"
          rel="noopener noreferrer"
        >
          good tunes
        </a> */}
        <iframe width="560" height="315" title = "mac" src="https://www.youtube.com/embed/g8sX6wZHhD0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </header>
    </div>
  );
}

export default App;
