import { createSelector } from 'reselect';

/**
 * Direct selector to the myCharities state domain
 */
const selectMyCharitiesDomain = (state) => state.get('myCharities');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MyCharities
 */

const makeSelectMyCharities = () => createSelector(
  selectMyCharitiesDomain,
  (substate) => substate.toJS()
);

export default makeSelectMyCharities;
export {
  selectMyCharitiesDomain,
};
