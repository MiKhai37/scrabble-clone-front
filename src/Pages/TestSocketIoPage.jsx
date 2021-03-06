import React, { useState } from 'react';
import ClientComponent from '../Components/ClientSocketIo';

const TestSocketIoPage = () => {
  const [loadClient, setLoadClient] = useState(true);
  return (
    <>
      {/* LOAD OR UNLOAD THE CLIENT */}
      <button onClick={() => setLoadClient(prevState => !prevState)}>
        {loadClient ? 'STOP CLIENT' : 'START CLIENT'}
      </button>
      {/* SOCKET IO CLIENT*/}
      {loadClient ? <ClientComponent /> : null}
    </>
  );
}

export default TestSocketIoPage;
