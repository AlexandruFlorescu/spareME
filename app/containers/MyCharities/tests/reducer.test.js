
import { fromJS } from 'immutable';
import myCharitiesReducer from '../reducer';

describe('myCharitiesReducer', () => {
  it('returns the initial state', () => {
    expect(myCharitiesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
