import * as React from 'react';
import {render, cleanup} from '@testing-library/react-native';

import Avatar from './Avatar';

describe('Avatar', () => {
  afterEach(cleanup);

  const props = {
    uri: 'N/A',
    size: 30,
    fromGallery: false,
  };

  it('should render avatar without image correctly', () => {
    const {toJSON} = render(<Avatar {...props} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render avatar with image correctly', () => {
    const _props = {
      ...props,
      uri: 'https://static.wikia.nocookie.net/naruto/images/d/dd/Naruto_Uzumaki%21%21.png/revision/latest?cb=20161013233552',
    };
    const {toJSON} = render(<Avatar {..._props} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
