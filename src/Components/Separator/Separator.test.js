import * as React from 'react';
import {render, cleanup} from '@testing-library/react-native';

import Separator from './Separator';

describe('Separator', () => {
  afterEach(cleanup);

  it('should render separator correctly', () => {
    const {toJSON} = render(<Separator />);

    expect(toJSON()).toMatchSnapshot();
  });
});
