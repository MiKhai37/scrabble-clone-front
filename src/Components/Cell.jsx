import React from 'react';

const Cell = ({ letter }) => {

  return (
    <>
    <div style={{ padding: 0, margin: -1, height: 45, width: 45, border: '1px solid black', borderRadius: 5 }}>
      {letter}
    </div>
    </>
  )
}

export default Cell