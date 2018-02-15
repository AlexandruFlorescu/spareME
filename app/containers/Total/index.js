/**
 *
 * Total
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTotal from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Wrapper from './Wrapper';
import Column from './Column';
import TotalDonated from 'components/TotalDonated';
import LatestAd from 'components/TotalDonated';
import SmallCharities from 'containers/SmallCharities'


export class Total extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Column>
          <LatestAddition props = { {title:'text', price:'4.65$', change:'.35$'} }>

          </LatestAddition>
        </Column>
        <Column>
          <TotalDonated amount="50"></TotalDonated>
        </Column>
        <Column>
          <SmallCharities>

          </SmallCharities>
        </Column>
      </Wrapper>
    );
  }
}

Total.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  total: makeSelectTotal(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'total', reducer });
const withSaga = injectSaga({ key: 'total', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Total);
