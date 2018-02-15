
import { fromJS } from 'immutable';
import totalReducer from '../reducer';

describe('totalReducer', () => {
  it('returns the initial state', () => {
    expect(totalReducer(undefined, {})).toEqual(fromJS({}));
  });
});
