import * as React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import {requestCamera} from '../../Utils/Camera';

import Camera from './Camera';

jest
  .mock('../../Utils/Camera', () => ({
    requestCamera: jest.fn(),
  }))
  .mock('react-native-image-picker', () => ({
    launchImageLibrary: jest.fn(),
  }));

describe('Camera', () => {
  afterEach(cleanup);

  it('should render camera correctly', () => {
    const {toJSON} = render(<Camera />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should call requestCamera when Take Image button is clicked', () => {
    const {getByText} = render(<Camera />);

    const button = getByText('Take Image');
    fireEvent.press(button);

    expect(requestCamera).toBeCalled();
  });

  it('should call launchImageLibrary when Select Image button is clicked', () => {
    const {getByText} = render(<Camera />);

    const button = getByText('Select Image');
    fireEvent.press(button);

    expect(launchImageLibrary).toBeCalled();
  });
});
