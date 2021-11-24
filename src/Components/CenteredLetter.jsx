import React, { useEffect, useState } from 'react';

const CenteredLetter = ({ children }) => {

  return (
    <div style={{ position: 'relative', float: 'left', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', userSelect: 'none' }}>
      {children}
    </div>
  );
};

export default CenteredLetter;
