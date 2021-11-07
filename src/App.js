import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Login, SignUp, Dashboard, Gameboard, NotFound, TestSocketIo } from './Pages';

import MainLayout from './Components/MainLayout';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import AuthContext from './Contexts/authContext';

let logoutTimer;

const backend_url = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BACKEND_URL : "http://localhost:5000";

const App = () => {
  const [token, setToken] = useState(false);
  const [user, setUser] = useState(null)
  const [tokenExpirationDate, setTokenExpirationDate] = useState();

  const login = useCallback(async ({ email, password }) => {

    const res = await fetch(
      `${backend_url}/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        //credentials: 'include',
        body: JSON.stringify({ email, password }),
      }
    );

    if (!res.ok) {
      return await res.text();
    }

    const resJSON = await res.json()
    setToken(resJSON.token)

    setUser({
      id: resJSON.jwtPayload.id,
      username: resJSON.jwtPayload.username,
      email: resJSON.jwtPayload.email,
    })

    const expiration = new Date(resJSON.jwtPayload.expiration)
    setTokenExpirationDate(expiration)

    localStorage.setItem(
      "userData",
      JSON.stringify({
        token: resJSON.token,
        expirationTime: expiration.toISOString(),
        user: {
          id: resJSON.jwtPayload.id,
          username: resJSON.jwtPayload.username,
          email: resJSON.jwtPayload.email,
        }
      })
    );

  }, []);

  const logout = useCallback(async () => {
    await fetch(`${backend_url}/auth/logout`);

    setToken(null);
    localStorage.removeItem("userData");
  }, []);

  const signup = async ({ email, username, password }) => {

    const res = await fetch(
      `${backend_url}/auth/signup`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        //credentials: 'include',
        body: JSON.stringify({ email, username, password }),
      }
    )

    if (!res.ok) {
      return await res.text()
    }

    login({ email, username, password })

  }

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expirationTime) > new Date()
    ) {
      setToken(storedData.token);
      setUser(storedData.user)
      setTokenExpirationDate(new Date(storedData.expirationTime));
    }
  }, [login]);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      console.log('Session remaining time (s): ', Math.floor(remainingTime/1000))
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
            user,
            login,
            signup,
            logout,
          }}
        >
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Home} />
              <PublicRoute restricted exact path='/login' component={Login} />
              <PublicRoute restricted exact path='/signup' component={SignUp} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/gameboard' component={Gameboard} />
              <PrivateRoute exact path='/socket' component={TestSocketIo} />
              <Route component={NotFound} />
            </Switch>
          </MainLayout>
        </AuthContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;

