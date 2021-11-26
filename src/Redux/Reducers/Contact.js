import Constants from '../../Constants';

const initialState = {
  contactList: [],
  shouldReload: false,
};

const contactReducers = (state = initialState, action) => {
  switch (action.type) {
    case Constants.REDUX_ACTION.SET_CONTACT:
      return {
        ...state,
        contactList: action.payload,
      };
    case Constants.REDUX_ACTION.SET_SHOULD_RELOAD:
      return {
        ...state,
        shouldReload: action.payload,
      };
    default:
      return state;
  }
};

export default contactReducers;
