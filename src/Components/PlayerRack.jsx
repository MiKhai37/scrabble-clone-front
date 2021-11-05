import React, { useEffect, useState } from 'react';
import LetterTile from './LetterTile'

const PlayerRack = ({ letters }) => {
  const [currentTile, setCurrentTile] = useState(null)

  useEffect(() => {

    const tiles = document.querySelectorAll('.tile')

    tiles.forEach(tile => {
      tile.addEventListener('click', () => {
        console.log('tile click');
        console.log(tile.id)
        console.log(tile.getAttribute('letter'))
        tile.classList.toggle('selected');
      });
    })


    }, []);

    return (
      <div style={{ display: 'flex', margin: 30, border: '1px solid black', justifyContent: 'center' }}>
        {letters.map((letter, i) => {
          return (
            <div style={{ margin: 10 }} key={i}>
              <LetterTile letter={letter} classname='tile' tileId={i} />
            </div>
          )
        })}
      </div>
    )
  }

export default PlayerRack
