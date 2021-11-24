import React from 'react';
import LetterTile from './LetterTile';

const PlayerRack = ({ children }) => {

  return (
    <div style={{ display: 'flex', margin: 30, border: '1px solid black', justifyContent: 'center' }}>
      {children.map((letter, i) => {
        return <LetterTile classname='tile' tileId={i} key={i}>{letter}</LetterTile>
      })}
    </div>
  )
}

export default PlayerRack
