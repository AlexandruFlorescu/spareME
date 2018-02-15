/**
 *
 * SmallCharities
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
import makeSelectSmallCharities from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Wrapper from './Wrapper';
import CharityName from './CharityName';

const Charities = [
  'Charity1', 'Charity2', 'Charity3', 'Charity4', 'Charity5', 'Charity6', 'Charity1', 'Charity2', 'Charity3', 'Charity4', 'Charity5', 'Charity6',
]



export class SmallCharities extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        {Charities.map((charity)=>
          <CharityName >{charity}</CharityName>
        )

        }
      </Wrapper>
    );
  }
}

SmallCharities.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  smallcharities: makeSelectSmallCharities(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'smallCharities', reducer });
const withSaga = injectSaga({ key: 'smallCharities', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SmallCharities);
