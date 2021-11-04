import React from 'react';
import Cell from './Cell';

const GameGrid = ({ letters }) => {

  return (
    <table>
      <tbody>
    <tr style={{ border: '1px' }}>
      {letters.map((row, x) => {
        return (
          <td key={x} style={{ border: '1px' }}>
            {row.map((letter, y) => {
              return (
                <Cell letter={letter} key={`${x}-${y}-${letter}`} />
              )
            })}
          </td>
        )
      })}
    </tr>
    </tbody>
    </table>
  )
}

export default GameGrid
