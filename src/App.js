import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Login, SignUp, Profile, Stats, Dashboard, Gameboard, TestAuth, NotFound, Authentication } from './Pages';
import MainLayout from './Components/MainLayout';
import AuthContext from './Contexts/authContext';
import PublicRoute from '../src/Pages/PublicRoute';
import PrivateRoute from '../src/Pages/PrivateRoute';

let logoutTimer;

const App = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();

  const login = useCallback((token, expirationTime) => {
    setToken(token);
    const expiration =
      expirationTime || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(expiration);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        token,
        expirationTime: expiration.toISOString()
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expirationTime) > new Date()
    ) {
      login(storedData.token, new Date(storedData.expirationTime));
    }
  }, [login]);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  return (
    <>
      <BrowserRouter>
        <AuthContext.Provider
          value={{
            isLoggedIn: !!token,
            token,
            login,
            logout,
          }}
        >
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={SignUp} />
              <PrivateRoute exact path='/profile' component={Profile} />
              <PrivateRoute exact path='/stats' component={Stats} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/gameboard' component={Gameboard} />
              <Route exact path='/auth' component={Authentication} />
              <Route component={NotFound} />
            </Switch>
          </MainLayout>
        </AuthContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;

