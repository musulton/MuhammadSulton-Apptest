import Constants from '../../Constants';

const actions = [
  {
    title: 'Take Image',
    type: Constants.CAMERA_ACTION_TYPE.CAPTURE,
    options: {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    },
  },
  {
    title: 'Select Image',
    type: Constants.CAMERA_ACTION_TYPE.LIBRARY,
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
    },
  },
];

export default {
  actions,
};
