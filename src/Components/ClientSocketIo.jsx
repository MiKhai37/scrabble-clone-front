import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BACKEND_URL : "http://localhost:5000";

const ClientComponent = () => {
  const [response, setResponse] = useState('');
  const [socketID, setSocketID] = useState('');

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
      setSocketID(socket.id)
    });

    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
    
  }, []);

  return (
    <div>
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
    <p>
      Socket Client ID {socketID}
    </p>
    </div>
  );
}

export default ClientComponent;