import React from 'react';
import './App.scss';
import About from './components/About';
import ButtonAppBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import Intro from './components/Intro';
import {Route,Switch} from 'react-router-dom';
import * as ROUTES from './constants/routes';

function App() {
  return (
    <React.Fragment>
      <ButtonAppBar />
      {/* <Intro /> */}
      <Switch>
        <Route exact path='/' component={Intro}/>
        <Route path={ROUTES.DETAILS} component={Main}/>
        <Route path={ROUTES.ABOUT} component={About}/>
      </Switch>
      {/* <Main /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
