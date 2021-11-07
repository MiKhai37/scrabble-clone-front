import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Login, SignUp, Dashboard, Gameboard, NotFound, TestSocketIo } from './Pages';
import MainLayout from './Components/MainLayout';
import AuthContext from './Contexts/authContext';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute'

let logoutTimer;

const backend_url = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BACKEND_URL : "http://localhost:5000";

const App = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();

  const login = useCallback(async (email, password) => {

    const bodyData = { email, password };

    const res = await fetch(
      `${backend_url}/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        //credentials: 'include',
        body: JSON.stringify(bodyData),
      }
    );

    if (res.status !== 201) {
      console.log('Login Unsuccessful');
      return;
    }

    const resJSON = await res.json()
    setToken(resJSON.token)

    const expiration = new Date(resJSON.jwtPayload.expiration)
    setTokenExpirationDate(expiration)

    localStorage.setItem(
      "userData",
      JSON.stringify({
        token: resJSON.token,
        expirationTime: expiration.toISOString()
      })
    );

  }, []);

  const logout = useCallback(async () => {
    await fetch(
      `${backend_url}/auth/logout`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      }
    );

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
      setToken(storedData.token);
      setTokenExpirationDate(new Date(storedData.expirationTime));
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

