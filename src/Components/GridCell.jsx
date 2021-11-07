import React from 'react';
import styled from 'styled-components';
import CenteredLetter from './CenteredLetter';

const Cell = styled.div`
padding: 0px;
margin: -1px;
height: 45px;
width: 45px;
border: 1px solid black;
`;

const GridCell = ({ letter, coords }) => {

  return (
    <>
      <Cell className='cell' id={coords} letter={letter}>
        <CenteredLetter letter={letter} />
      </Cell>
    </>
  )
}

export default GridCell;