import * as React from 'react';
import {render, cleanup} from '@testing-library/react-native';

import Button from './Button';

describe('Button', () => {
  afterEach(cleanup);

  it('should render button correctly', () => {
    const {toJSON} = render(<Button text={'example'} onPress={jest.fn} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
