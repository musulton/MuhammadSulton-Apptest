import ContactActions from './Contact';
import Constants from '../../Constants';

describe('Contact Actions', () => {
  it('#setContact', () => {
    const contact = {name: 'Name'};
    const expectedResult = {
      type: Constants.REDUX_ACTION.SET_CONTACT,
      payload: contact,
    };
    const actualResult = ContactActions.setContact(contact);

    expect(actualResult).toEqual(expectedResult);
  });

  it('#setShouldReload', () => {
    const shouldReload = true;
    const expectedResult = {
      type: Constants.REDUX_ACTION.SET_SHOULD_RELOAD,
      payload: shouldReload,
    };
    const actualResult = ContactActions.setShouldReload(shouldReload);

    expect(actualResult).toEqual(expectedResult);
  });
});
