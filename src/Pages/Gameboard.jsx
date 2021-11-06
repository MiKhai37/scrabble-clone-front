import React from 'react';
import GameGrid from '../Components/GameGrid';
import PlayerRack from '../Components/PlayerRack';
import { Typography } from 'antd';

const { Title } = Typography;

const GameboardPage = () => {
  


  const row = new Array(15).fill('_');
  const cells = new Array(15).fill(row);

  const letterTile = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  return (
    <>
      <Title>Gameboard</Title>
      <div style={{}}>
        <GameGrid letters={cells} />
        <PlayerRack letters={letterTile} />
      </div>
    </>
  )
}

export default GameboardPage
