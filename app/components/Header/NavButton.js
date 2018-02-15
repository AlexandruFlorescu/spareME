/**
*
* NavButton
*
*/

import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  width: 100px;
  height: 35px;
  margin: 0px 5px;
  background-color: green;
  color: white;
  text-align: center;
  padding-top: 5px;
  border-radius: 2px;
  box-shadow: -0.9px 2.1px 2.5px 0.5px grey;

  &:hover{
    box-shadow: -1.9px 2.5px 2.5px 0.5px grey;
  }

  &:active{
    box-shadow: inset 1px 1px 0.1px 0.1px grey;
  }
`;

function NavButton(props) {
  return (
    <Button href={props.href}>
      {props.children}
    </Button>
  );
}

NavButton.propTypes = {

};

export default NavButton;
