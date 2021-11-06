// eslint-disable-next-line
import React, { useEffect, useState } from 'react';

const LetterTile = ({ letter, tileId }) => {

  return (
    <>
      <div className='tile' id={`tile-${tileId}`} letter={letter} style={{ padding: 0, margin: -1, height: 40, width: 40, border: '1px solid black', borderRadius: 5 }}>
        <div style={{ position: 'relative', float: 'left', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', userSelect: 'none' }}>
          {letter}
        </div>
      </div>
    </>
  )
}

export default LetterTile