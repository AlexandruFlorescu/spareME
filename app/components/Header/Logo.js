/**
*
* Logo
*
*/

import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: calc(15% - 20px);
  height: 35px;
  float: left;
  padding: 0 auto;
  margin-left: 10px;
`;


function Logo(props) {
  return (
    <Img src={props.img}>
    </Img>
  );
}

Logo.propTypes = {

};

export default Logo;
