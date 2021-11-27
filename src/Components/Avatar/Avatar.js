import Icon from 'react-native-vector-icons/FontAwesome';
import * as React from 'react';
import {Image, View} from 'react-native';

import {validURL} from '../../Utils/Url';
import Colors from '../../Themes/Colors';

import styles from './Avatar.styles';

const Avatar = ({uri, size, fromGallery}) => {
  const withPhoto = fromGallery ? uri : validURL(uri);
  if (withPhoto) {
    return <Image source={{uri}} style={styles.avatarBackground(size)} />;
  }

  return (
    <View style={styles.avatarBackground(size)}>
      <Icon name="user" size={40} color={Colors.icon} />
    </View>
  );
};

export default Avatar;
