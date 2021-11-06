import React, { useEffect, useState } from 'react';
import Cell from './Cell';

const GameGrid = ({ letters }) => {
  // eslint-disable-next-line
  const [currentCell, setCurrentCell] = useState(null)

  useEffect(() => {

    const cells = document.querySelectorAll('.cell')

    console.log(cells)

    cells.forEach(cell => {
      cell.addEventListener('click',() => {
        console.log('click');
        console.log(cell.getAttribute('coords'));
        cell.classList.toggle('selected')
        setCurrentCell(cell.getAttribute('coords'))
      })
    })
    

  }, [])

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <table>
        <tbody>
          <tr style={{ border: '1px' }}>
            {letters.map((row, x) => {
              return (
                <td key={x} style={{ border: '1px' }}>
                  {row.map((letter, y) => {
                    return (
                      <Cell className='cell' id={`cell-${x}-${y}`} letter={letter} coords={[x, y]} key={[x,y]}  />
                    )
                  })}
                </td>
              )
            })}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default GameGrid
