import { createSelector } from 'reselect';

/**
 * Direct selector to the total state domain
 */
const selectTotalDomain = (state) => state.get('total');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Total
 */

const makeSelectTotal = () => createSelector(
  selectTotalDomain,
  (substate) => substate.toJS()
);

export default makeSelectTotal;
export {
  selectTotalDomain,
};
