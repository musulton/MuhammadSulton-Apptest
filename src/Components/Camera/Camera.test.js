import * as React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import Camera from './Camera';

jest.mock('react-native-image-picker', () => ({
  launchCamera: jest.fn(),
  launchImageLibrary: jest.fn(),
}));

describe('Camera', () => {
  afterEach(cleanup);

  it('should render camera correctly', () => {
    const {toJSON} = render(<Camera />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should call launchCamera when Take Image button is clicked', () => {
    const {getByText} = render(<Camera />);

    const button = getByText('Take Image');
    fireEvent.press(button);

    expect(launchCamera).toBeCalled();
  });

  it('should call launchImageLibrary when Select Image button is clicked', () => {
    const {getByText} = render(<Camera />);

    const button = getByText('Select Image');
    fireEvent.press(button);

    expect(launchImageLibrary).toBeCalled();
  });
});
