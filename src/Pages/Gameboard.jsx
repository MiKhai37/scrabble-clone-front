import React, { useState, useEffect } from 'react';
import GameGrid from '../Components/GameGrid';
import PlayerRack from '../Components/PlayerRack';
import { Typography, Button } from 'antd';

const { Title, Text } = Typography;

const row = new Array(15).fill('_');
const cellss = new Array(15).fill(row);
const letterTile = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const GameboardPage = () => {

  const [playerTiles, setPlayerTiles] = useState(letterTile);
  const [gbCells, setGbCells] = useState(cellss);

  const [errMsg, setErrMsg] = useState('');
  const [currentTile, setCurrentTile] = useState(null);
  const [currentCell, setCurrentCell] = useState(null);
  const [lettersplayed, setLettersplayed] = useState([]);
  
  
  
  useEffect(() => {
    const tiles = document.querySelectorAll('.tile');
    const cells = document.querySelectorAll('.cell');

    // And new listeners
    tiles.forEach(tile => {
      tile.addEventListener('click', () => selectTile(tile))
    })

    cells.forEach(cell => {
      cell.addEventListener('click', () => selectCell(cell))
    })


  }, [currentTile, currentCell]);

  const selectTile = (tile) => {
    console.log('tile clicked');
    console.log(tile.id);
    console.log(tile.getAttribute('letter'));
    tile.classList.toggle('selected');

    setCurrentTile(`${tile.id}(${tile.getAttribute('letter')})`)
  };

  const selectCell = (cell) => {

    setErrMsg('')
    if (!currentTile) {
      setErrMsg('select a tile');
      return
    }

    console.log('cell clicked');
    console.log(cell.id);
    console.log(cell.getAttribute('letter'));
    cell.classList.toggle('selected');

    setCurrentCell(cell.id)

    setLettersplayed([...lettersplayed, currentTile])
  };

  const handleSubmit = () => {
    // Submit the letters to the server
  };

  return (
    <>
      <Title>Gameboard {lettersplayed}</Title>
      <Text>Current Tile: {currentTile}, Current cell: {currentCell}</Text>
      <Text type='danger'>{errMsg}</Text>
      <Button onClick={handleSubmit}>Submit</Button>
      <div style={{}}>
        <GameGrid letters={gbCells} />
        <PlayerRack letters={playerTiles} />
      </div>
    </>
  )
}

export default GameboardPage
