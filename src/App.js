import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ButtonAppBar from './components/NavBar'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      {/* <div className="App"> */}
        {/* <header className="App-header">
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
      </header> */}
        <ButtonAppBar />
        <Main/>
        <Footer/>
      {/* </div> */}
    </React.Fragment>
  );
}

export default App;
