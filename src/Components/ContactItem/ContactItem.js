import * as React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';

import styles from './ContactItem.styles';

const Bio = ({name}) => (
  <View style={styles.bioContainer}>
    <Text style={styles.fullName}>{name}</Text>
  </View>
);

const Photo = ({uri}) => <Image source={{uri}} style={styles.photo} />;

const ContactItem = props => (
  <TouchableOpacity style={styles.container} onPress={props.onPress}>
    <Photo uri={props.uri} />
    <Bio name={props.name} />
  </TouchableOpacity>
);

export default ContactItem;
