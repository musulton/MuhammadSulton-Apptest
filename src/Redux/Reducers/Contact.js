import Constants from '../../Constants';

const initialState = {
  contactList: [],
};

const contactReducers = (state = initialState, action) => {
  switch (action.type) {
    case Constants.REDUX_ACTION.SET_CONTACT:
      return {
        ...state,
        contactList: action.payload,
      };
    default:
      return state;
  }
};

export default contactReducers;
