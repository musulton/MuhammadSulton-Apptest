import * as React from 'react';
import {render, cleanup} from '@testing-library/react-native';

import ContactItem from './ContactItem';

jest.mock('../index', () => ({
  Avatar: 'Avatar',
}));

describe('ContactItem', () => {
  afterEach(cleanup);

  const data = {
    firstName: 'firstName',
    lastName: 'lastName',
    age: 20,
    photo:
      'https://static.wikia.nocookie.net/naruto/images/d/dd/Naruto_Uzumaki%21%21.png/revision/latest?cb=20161013233552',
  };

  it('should render contact item correctly', () => {
    const {toJSON} = render(<ContactItem data={data} onPress={jest.fn} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
