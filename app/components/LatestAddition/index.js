/**
*
* LatestAddition
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Wrapper = styled.div`
  border-radius: 50px;
  border: 1px solid white;
  color: white;
`;

function LatestAddition() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

LatestAddition.propTypes = {

};

export default LatestAddition;
