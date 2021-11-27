import Constants from '../../Constants';

import ContactReducers, {initialState} from './Contact';

describe('ContactReducers', () => {
  it('returns the initial state', () => {
    expect(ContactReducers(undefined, {})).toEqual(initialState);
  });

  it('handle set contact', () => {
    const payload = [{name: 'Name'}];
    const expectedState = {
      ...initialState,
      contactList: payload,
    };
    expect(
      ContactReducers(initialState, {
        type: Constants.REDUX_ACTION.SET_CONTACT,
        payload,
      }),
    ).toEqual(expectedState);
  });

  it('handle set should reload', () => {
    const payload = true;
    const expectedState = {
      ...initialState,
      shouldReload: payload,
    };
    expect(
      ContactReducers(initialState, {
        type: Constants.REDUX_ACTION.SET_SHOULD_RELOAD,
        payload,
      }),
    ).toEqual(expectedState);
  });
});
