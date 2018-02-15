
import { fromJS } from 'immutable';
import roundupsReducer from '../reducer';

describe('roundupsReducer', () => {
  it('returns the initial state', () => {
    expect(roundupsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
