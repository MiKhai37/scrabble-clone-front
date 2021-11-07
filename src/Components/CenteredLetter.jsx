import React from 'react';

const CenteredLetter = ({ letter }) => {
  return (
    <div style={{ position: 'relative', float: 'left', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', userSelect: 'none' }}>
      {letter}
    </div>
  );
};

export default CenteredLetter;
