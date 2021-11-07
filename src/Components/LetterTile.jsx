import React from 'react';
import styled from 'styled-components';

const Tile = styled.div`
padding: 0;
margin: -1;
height: 40px;
width: 40px;
border: 1px solid black;
border-radius: 5px;
`;
// eslint-disable-next-line
const Letter = styled.div`
position: relative;
float: left;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

const LetterTile = ({ letter, tileId }) => {

  return (
    <>
      <Tile className='tile' id={tileId}>
        <div style={{ position: 'relative', float: 'left', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', userSelect: 'none' }}>
          {letter}
        </div>
      </Tile>
    </>
  )
}

export default LetterTile

//className='tile' id={tileId} letter={letter} style={{ padding: 0, margin: -1, height: 40, width: 40, border: '1px solid black', borderRadius: 5 }}