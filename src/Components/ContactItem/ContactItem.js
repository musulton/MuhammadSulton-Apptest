import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {Avatar} from '../index';

import styles from './ContactItem.styles';

const Bio = ({firstName, lastName}) => (
  <View style={styles.bioContainer}>
    <Text style={styles.fullName}>
      {firstName} {lastName}
    </Text>
  </View>
);

const ContactItem = ({data, onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Avatar uri={data.photo} size={60} />
    <View style={styles.distance} />
    <Bio firstName={data.firstName} lastName={data.lastName} />
  </TouchableOpacity>
);

export default ContactItem;
