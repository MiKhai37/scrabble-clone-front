import React, { createContext, useContext } from 'react';
import { useAuth } from './authContext';

const UserContext = createContext();

const UserProvider = ({ children }) => {

  return (
    <UserContext.Provider value={useAuth().user} >
      {children}
    </UserContext.Provider>
  )

};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };