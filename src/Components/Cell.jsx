import React from 'react';

const Cell = ({ letter }) => {

  return (
    <>
      <div style={{ padding: 0, margin: -1, height: 45, width: 45, border: '1px solid black' }}>
        <div style={{ position: 'relative', float: 'left', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', userSelect: 'none' }}>
          {/* {letter} */}
        </div>
      </div>
    </>
  )
}

export default Cell;