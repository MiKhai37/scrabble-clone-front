import React, { useContext } from "react";
import AuthContext from '../Contexts/authContext'

function TestAuthPage() {
  const authContext = useContext(AuthContext);

  return (
    authContext.isLoggedIn
    ?
    <h1>I am a authenticated resource, and you are logged in</h1>
    :
    <h1>I am a authenticated resource, you are NOT logged in</h1>
  )
}

export default TestAuthPage