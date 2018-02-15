/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';

import NavBar from './NavBar';
import Logo from './Logo';
import NavButton from './NavButton';
import Wrapper from './Wrapper';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavBar>
        <Logo img='https://arizonachristian.edu/wp-content/uploads/2017/06/logo-placeholder.png'></Logo>
        <Wrapper>
          <NavButton><FormattedMessage {...messages.header} /></NavButton>
          <NavButton><FormattedMessage {...messages.header} /></NavButton>
          <NavButton><FormattedMessage {...messages.header} /></NavButton>
          <NavButton><FormattedMessage {...messages.header} /></NavButton>
        </Wrapper>

      </NavBar>
    );
  }
}

Header.propTypes = {

};

export default Header;
