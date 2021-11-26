import * as React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';

import styles from './ContactItem.styles';

const Bio = ({firstName, lastName}) => (
  <View style={styles.bioContainer}>
    <Text style={styles.fullName}>
      {firstName} {lastName}
    </Text>
  </View>
);

const Photo = ({photo}) => <Image source={{uri: photo}} style={styles.photo} />;

const ContactItem = ({data, onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Photo photo={data.photo} />
    <Bio firstName={data.firstName} lastName={data.lastName} />
  </TouchableOpacity>
);

export default ContactItem;
