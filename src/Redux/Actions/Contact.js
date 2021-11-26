import Constants from '../../Constants';

const setContact = contact => ({
  type: Constants.REDUX_ACTION.SET_CONTACT,
  payload: contact,
});

export default {
  setContact,
};
