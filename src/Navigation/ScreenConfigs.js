import Constants from '../Constants';
import {ContactDetails, ContactForm, ContactList} from '../Containers';

const ScreenConfigs = [
  {
    name: Constants.ROUTES.CONTACT,
    component: ContactList,
  },
  {
    name: Constants.ROUTES.DETAILS,
    component: ContactDetails,
  },
  {
    name: Constants.ROUTES.FORM,
    component: ContactForm,
  },
];

export default ScreenConfigs;
