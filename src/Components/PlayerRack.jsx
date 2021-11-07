import React from 'react';
import LetterTile from './LetterTile';

const PlayerRack = ({ letters }) => {

  return (
    <div style={{ display: 'flex', margin: 30, border: '1px solid black', justifyContent: 'center' }}>
      {letters.map((letter, i) => {
        return <LetterTile classname='tile' letter={letter} tileId={i} key={i} />
      })}
    </div>
  )
}

export default PlayerRack
