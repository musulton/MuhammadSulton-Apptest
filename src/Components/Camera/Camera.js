import * as React from 'react';
import {View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import {Avatar, Button} from '../index';
import Constants from '../../Constants';
import {requestCamera} from '../../Utils/Camera.utils';

import styles from './Camera.styles';
import config from './Camera.config';

const Camera = ({imgPhoto, isUpdateData}) => {
  const [resourcePath, setResourcePath] = React.useState({
    assets: [],
  });

  const onButtonPress = React.useCallback((type, options) => {
    const imageMethod =
      type === Constants.CAMERA_ACTION_TYPE.CAPTURE
        ? requestCamera
        : launchImageLibrary;
    imageMethod(options, setResourcePath);
  }, []);

  return (
    <View style={styles.container}>
      <Avatar
        uri={isUpdateData ? imgPhoto : resourcePath?.assets?.[0]?.uri}
        size={200}
        fromGallery={!isUpdateData}
      />
      <View style={styles.buttonContainer}>
        {config.actions.map(({title, type, options}, i) => {
          return (
            <Button
              key={i}
              text={title}
              onPress={() => onButtonPress(type, options)}>
              {title}
            </Button>
          );
        })}
      </View>
    </View>
  );
};

export default Camera;
