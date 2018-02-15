/**
*
* TotalDonated
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  `;

const Text = styled.div`
  font-size: 36px;
  color: white;
  text-align: center;
`;

class TotalDonated extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Text>{"$ "+ this.props.amount+" "} <FormattedMessage {...messages.header} /></Text>
      </Wrapper>
    );
  }
}

TotalDonated.propTypes = {

};

export default TotalDonated;
