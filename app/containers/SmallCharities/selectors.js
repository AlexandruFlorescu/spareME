import { createSelector } from 'reselect';

/**
 * Direct selector to the smallCharities state domain
 */
const selectSmallCharitiesDomain = (state) => state.get('smallCharities');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SmallCharities
 */

const makeSelectSmallCharities = () => createSelector(
  selectSmallCharitiesDomain,
  (substate) => substate.toJS()
);

export default makeSelectSmallCharities;
export {
  selectSmallCharitiesDomain,
};
