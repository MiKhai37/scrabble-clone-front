import React, { useState, useEffect } from 'react';
import GameGrid from '../Components/GameGrid';
import PlayerRack from '../Components/PlayerRack';
import { Typography, Button } from 'antd';

const { Title, Text } = Typography;

const row = new Array(15).fill('_');
const cellss = new Array(15).fill(row);
const letterTile = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const GameboardPage = () => {
  // eslint-disable-next-line
  const [playerTiles, setPlayerTiles] = useState(letterTile);
  // eslint-disable-next-line
  const [gbCells, setGbCells] = useState(cellss);
  
  const [errMsg, setErrMsg] = useState('');
  const [currentTile, setCurrentTile] = useState(null);
  const [toSubmit, setToSubmit] = useState({
    letters: [],
    tiles: [],
    coords: [],
  });
  
  useEffect(() => {
    
    const tiles = document.querySelectorAll('.tile');
    const cells = document.querySelectorAll('.cell');

    tiles.forEach(tile => {
      // Avoid multiplication of event listeners, clone and replace
      const tileClone = tile.cloneNode(true);
      tile.parentNode.replaceChild(tileClone, tile);

      tileClone.addEventListener('click', () => {

        setErrMsg('')

        if (tileClone?.id === currentTile?.id) {
          setCurrentTile(null);
          return;
        }

        if (toSubmit.tiles.includes(tileClone?.id)) {
          setErrMsg('Tile already played');
          return;
        }

        console.log('tile clicked');
        console.log(tileClone.id);
        console.log(tileClone.getAttribute('letter'));
    
        setCurrentTile(tileClone);
      })

    })

    cells.forEach(cell => {
      const cellClone = cell.cloneNode(true);
      cell.parentNode.replaceChild(cellClone, cell);
      
      cellClone.addEventListener('click', () => {
    
        setErrMsg('');
        if (!currentTile) {
          setErrMsg('Select a tile first!');
          return;
        }

        console.log('cell clicked');
        console.log(cellClone.id);
        console.log(cellClone.getAttribute('letter'));
        cellClone.setAttribute('letter', 'O')

        setToSubmit({
          letters: [...toSubmit.letters, currentTile.textContent],
          tiles: [...toSubmit.tiles, currentTile.id],
          coords: [...toSubmit.coords, cellClone.id]
        })

        setCurrentTile(null);
      })
    })

  }, [currentTile, toSubmit]);


  const handleSubmit = () => {
    // Submit the letters to the server


    // Info
    setErrMsg('Sent to the backend')

    // Init tiles
    setToSubmit({
      letters: [],
      tiles: [],
      coords: []
    })
  };

  return (
    <>
      <Title>Gameboard</Title>
      <p><Text type='danger'>{errMsg}</Text></p>
      <p><Text type='success'>Letters: {toSubmit.letters.join(' / ')}</Text></p>
      <p><Text type='success'>IDs: {toSubmit.tiles.join(' / ')}</Text></p>
      <p><Text type='success'>Coords: {toSubmit.coords.join(' / ')}</Text></p>
      <Button onClick={handleSubmit}>Submit</Button>
      <div style={{}}>
        <GameGrid letters={gbCells} />
        <PlayerRack letters={playerTiles} />
      </div>
    </>
  )
}

export default GameboardPage;
