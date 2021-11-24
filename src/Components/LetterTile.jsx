import React from 'react';
import styled from 'styled-components';
import CenteredLetter from './CenteredLetter';

const Tile = styled.div`
padding: 0;
margin: 10px;
height: 40px;
width: 40px;
border: ${props => props.selected ? '3px solid black' : '1px solid black'};
border-radius: 5px;
color: ${props => props.used ? 'white' : 'black'}
`;



const LetterTile = ({ children, tileId }) => {

  return (
    <>
      <Tile className='tile' id={tileId} >
      <CenteredLetter>{children}</CenteredLetter>
      </Tile>
    </>
  )
}

export default LetterTile
