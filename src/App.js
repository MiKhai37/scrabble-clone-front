import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Login, SignUp, Profile, Stats, Dashboard, Gameboard, NotFound } from './Pages';
import MainLayout from './Components/MainLayout';
import AppProviders from './Auth/AppProviders';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppProviders>
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={SignUp} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/stats' component={Stats} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/gameboard' component={Gameboard} />
              <Route component={NotFound} />
            </Switch>
          </MainLayout>
        </AppProviders>
      </BrowserRouter>
    </>
  );
};

export default App;

