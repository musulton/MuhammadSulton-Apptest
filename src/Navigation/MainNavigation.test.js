import * as React from 'react';
import {render, cleanup} from '@testing-library/react-native';

import MainNavigation from './MainNavigation';

jest.mock('../Containers', () => ({
  ContactList: 'ContactList',
  ContactForm: 'ContactForm',
  ContactDetails: 'ContactDetails',
}));

describe('MainNavigation', () => {
  afterEach(cleanup);

  it('should render MainNavigation correctly', () => {
    const {toJSON} = render(<MainNavigation />);

    expect(toJSON()).toMatchSnapshot();
  });
});
