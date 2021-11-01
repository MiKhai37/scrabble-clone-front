import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Login, SignUp, Profile, Stats, Dashboard, Gameboard } from './Pages';

import MainLayout from './Components/MainLayout';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/stats' component={Stats} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/gameboard' component={Gameboard} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;

