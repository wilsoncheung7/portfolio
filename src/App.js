import React from 'react';
import './App.scss';
import ButtonAppBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Details from './components/Details';
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
      </Switch>
      {/* <Main /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
