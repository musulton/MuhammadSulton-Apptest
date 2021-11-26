import * as React from 'react';
import {View, Text, Image} from 'react-native';

import {ActionButton} from '../../Components';
import Constants from '../../Constants';
import styles from './ContactDetails.styles';

const Photo = () => (
  <Image
    source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
    style={styles.photo}
  />
);

const Bio = () => (
  <View style={styles.bioContainer}>
    <Text>Muhammad Sulton</Text>
    <Text>26</Text>
  </View>
);

const ContactDetails = () => (
  <View style={styles.container}>
    <View style={styles.infoContainer}>
      <Photo />
      <Bio />
    </View>
    <ActionButton type={Constants.ACTION_BUTTON.EDIT} />
    <ActionButton type={Constants.ACTION_BUTTON.DELETE} />
  </View>
);

export default ContactDetails;
