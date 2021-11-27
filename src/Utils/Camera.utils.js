import {Alert, PermissionsAndroid} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import Constants from '../Constants';

export const requestCamera = async (options, setResourcePath) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      launchCamera(options, setResourcePath);
    } else {
      Alert.alert(
        'Info',
        "You haven't given the app permission to access the camera",
        [
          {
            text: 'Ok',
          },
        ],
      );
    }
  } catch (e) {
    console.warn(e);
  }
};
