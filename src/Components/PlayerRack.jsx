import React from 'react';
import LetterTile from './LetterTile'

const PlayerLetters = ({ letters }) => {
  return (
    <div style={{ display: 'flex', margin: 30, border: '1px solid black', justifyContent: 'center' }}>
      {letters.map((letter, i) => {
        return (
          <div style={{ margin: 10 }} key={i}>
            <LetterTile letter={letter} order={i}/>
          </div>
        )
      })}
    </div>
  )
}

export default PlayerLetters
