import * as React from 'react';
import {render, cleanup} from '@testing-library/react-native';

import Constants from '../../Constants';

import ActionButton from './ActionButton';

describe('ActionButton', () => {
  afterEach(cleanup);

  it('should render add type correctly', () => {
    const {toJSON} = render(
      <ActionButton type={Constants.ACTION_BUTTON.ADD} onPress={jest.fn} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render edit type correctly', () => {
    const {toJSON} = render(
      <ActionButton type={Constants.ACTION_BUTTON.EDIT} onPress={jest.fn} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render delete type correctly', () => {
    const {toJSON} = render(
      <ActionButton type={Constants.ACTION_BUTTON.DELETE} onPress={jest.fn} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
