import React from 'react';
import GameGrid from '../Components/GameGrid';
import PlayerRack from '../Components/PlayerRack';
import { Typography } from 'antd';

const { Title } = Typography;

const GameboardPage = () => {

  const row = new Array(15).fill('A');
  const letters = new Array(15).fill(row);

  const playersLetters = new Array(7).fill('B');

  return (
    <>
      <Title>Gameboard</Title>
      <GameGrid letters={letters} />
      <PlayerRack letters={playersLetters}/>
    </>
  )
}

export default GameboardPage
