import * as React from 'react';
import {ScrollView, View} from 'react-native';

import {ContactItem, Separator} from '../../Components';
import styles from './ContactList.styles';

const TEST = [
  'Sulton',
  'Muhammad',
  'Rahman',
  'Wiwin',
  'Jaeni',
  'Dodol',
  'Dodi',
  'Dada',
  'Dede',
  'Dudu',
  'Sasa',
  'Sese',
];

const ContactList = props => (
  <ScrollView
    style={styles.container}
    contentContainerStyle={styles.contentContainer}>
    {TEST.map((value, i) => (
      <View key={i}>
        <ContactItem
          name={value}
          uri={'https://reactnative.dev/img/tiny_logo.png'}
          age={20}
          onPress={() => props.navigation.navigate('Details')}
        />
        {TEST.length - 1 !== i && <Separator />}
      </View>
    ))}
  </ScrollView>
);

export default ContactList;
