import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {Separator} from '../../Components';
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

const ActionButton = ({type}) => (
  <TouchableOpacity>
    <View>
      <Text>Edit Profile</Text>
      <Text>You can change everything</Text>
      <View style={styles.distance}>
        <Separator />
      </View>
    </View>
  </TouchableOpacity>
);

const ContactDetails = () => (
  <View style={styles.container}>
    <View style={styles.infoContainer}>
      <Photo />
      <Bio />
    </View>
    <ActionButton type="Edit" />
    <ActionButton type="Delete" />
  </View>
);

export default ContactDetails;
