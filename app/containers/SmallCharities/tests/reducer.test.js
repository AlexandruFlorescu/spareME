
import { fromJS } from 'immutable';
import smallCharitiesReducer from '../reducer';

describe('smallCharitiesReducer', () => {
  it('returns the initial state', () => {
    expect(smallCharitiesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
