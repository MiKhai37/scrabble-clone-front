import React from 'react';
import styled from 'styled-components';
import CenteredLetter from './CenteredLetter';

const Tile = styled.div`
padding: 0;
margin: 10px;
height: 40px;
width: 40px;
border: 1px solid black;
border-radius: 5px;
`;
// eslint-disable-next-line
const SelectedTile = styled(Tile)`
border: 2px solid black;
`;


const LetterTile = ({ letter, tileId }) => {

  return (
    <>
      <Tile className='tile' id={tileId}>
      <CenteredLetter letter={letter} />
      </Tile>
    </>
  )
}

export default LetterTile
