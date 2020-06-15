import React from 'react';
import './App.scss';
import ButtonAppBar from './components/NavBar'
import Main from './components/Main'
import Footer from './components/Footer'
import Intro from './components/Intro';


function App() {
  return (
    <React.Fragment>
      <ButtonAppBar />
      <Intro />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
