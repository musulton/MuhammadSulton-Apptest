import Constants from '../../Constants';

const PROPERTY_ACTION = {
  [Constants.ACTION_BUTTON.ADD]: {
    icon: 'plus',
    title: 'Add Contact',
    description: 'More contact the better',
  },
  [Constants.ACTION_BUTTON.EDIT]: {
    icon: 'pencil',
    title: 'Edit Contact',
    description: 'You can change everything',
  },
  [Constants.ACTION_BUTTON.DELETE]: {
    icon: 'trash',
    title: 'Delete Contact',
    description: 'Too bad to cut off communication',
  },
};

export default {
  PROPERTY_ACTION,
};
