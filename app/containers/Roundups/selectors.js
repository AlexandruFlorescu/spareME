import { createSelector } from 'reselect';

/**
 * Direct selector to the roundups state domain
 */
const selectRoundupsDomain = (state) => state.get('roundups');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Roundups
 */

const makeSelectRoundups = () => createSelector(
  selectRoundupsDomain,
  (substate) => substate.toJS()
);

export default makeSelectRoundups;
export {
  selectRoundupsDomain,
};
