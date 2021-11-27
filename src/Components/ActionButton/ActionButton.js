import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../../Themes/Colors';

import styles from './ActionButton.styles';
import config from './ActionButton.config';

const renderIcon = type => (
  <View style={styles.iconContainer}>
    <Icon
      name={config.PROPERTY_ACTION[type].icon}
      size={20}
      color={Colors.icon}
    />
  </View>
);

const renderText = type => (
  <View style={styles.textContainer}>
    <Text style={styles.text}>{config.PROPERTY_ACTION[type].title}</Text>
    <Text style={styles.text}>{config.PROPERTY_ACTION[type].description}</Text>
  </View>
);

const ActionButton = ({type, onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    {renderIcon(type)}
    {renderText(type)}
  </TouchableOpacity>
);

export default ActionButton;
