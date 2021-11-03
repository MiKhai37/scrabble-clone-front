import React from 'react';
import Cell from './Cell';

const PlayerLetters = ({ letters }) => {
  return (
    <div style={{ display: 'flex', margin: 30 }}>
      {letters.map(letter => {
        return (
          <Cell letter={letter} style={{ margin: 45 }} />
        )
      })}
    </div>
  )
}

export default PlayerLetters
