import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  user: null,
  login: () => {},
  signup: () => {},
  logout: () => {}
});

export default AuthContext