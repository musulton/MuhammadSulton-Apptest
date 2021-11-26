import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './ActionButton.styles';
import config from './ActionButton.config';
import {Separator} from '../index';

const renderIcon = type => (
  <View style={styles.iconContainer}>
    <Icon name={config.PROPERTY_ACTION[type].icon} size={20} color="#fff" />
  </View>
);

const renderText = type => (
  <View style={styles.textContainer}>
    <Text>{config.PROPERTY_ACTION[type].title}</Text>
    <Text>{config.PROPERTY_ACTION[type].description}</Text>
    {/*<View style={styles.distance}>*/}
    {/*  <Separator />*/}
    {/*</View>*/}
  </View>
);

const ActionButton = ({type, onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    {renderIcon(type)}
    {renderText(type)}
  </TouchableOpacity>
);

export default ActionButton;
