import React from 'react';
import GridCell from './GridCell';

const GameGrid = ({ letters }) => {

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
                      <GridCell className='cell' id={`cell-${x}-${y}`} letter={letter} coords={[x, y]} key={[x,y]}  />
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
