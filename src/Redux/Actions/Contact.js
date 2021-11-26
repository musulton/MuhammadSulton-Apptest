import Constants from '../../Constants';

const setContact = contact => ({
  type: Constants.REDUX_ACTION.SET_CONTACT,
  payload: contact,
});

const setShouldReload = reload => ({
  type: Constants.REDUX_ACTION.SET_SHOULD_RELOAD,
  payload: reload,
});

export default {
  setContact,
  setShouldReload,
};
