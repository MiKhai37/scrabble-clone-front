import React, { createContext, useContext, useState } from 'react';
import { useHistory } from "react-router-dom";

const AuthContext = createContext();

const baseBackendUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BACKEND_URL : 'http://localhost:5000'

const AuthProvider = ({ children }) => {
  // eslint-disable-next-line
  const [user, setUser] = useState(null)

  const history = useHistory();

  const login = async (email, password) => {
    const body = { email, password };
    try {
      const res = await fetch(
        `${baseBackendUrl}/auth/login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );
      if (res.status === 200) {
        setUser(res.user)
        console.log('res.user: ', await res.user)
        history.push('/profile');
      } else {
        throw new Error(await res.text());
      }
    } catch (err) {
      console.log('Login error: ', err);
    }
  };

  const signup = async (email, password) => {
    const body = { email, password };
    try {
      const res = await fetch(
        `${baseBackendUrl}/auth/signup`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );
      if (res.status === 200) {
        history.push('/login');
      } else {
        throw new Error(await res.text());
      }
    } catch (err) {
      console.log('Signup error: ', err);
    }
  };

  const logout = async () => {

  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )

};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };