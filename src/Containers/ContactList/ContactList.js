import * as React from 'react';
import {ScrollView, View} from 'react-native';

import {ActionButton, ContactItem, Separator} from '../../Components';
import styles from './ContactList.styles';
import Constants from '../../Constants';

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
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {TEST.map((value, i) => (
        <View key={i}>
          <ContactItem
            name={value}
            uri={'https://reactnative.dev/img/tiny_logo.png'}
            age={20}
            onPress={() => props.navigation.navigate(Constants.ROUTES.DETAILS)}
          />
          {TEST.length - 1 !== i && <Separator />}
        </View>
      ))}
    </ScrollView>
    <View style={styles.iconContainer}>
      <ActionButton type={Constants.ACTION_BUTTON.ADD} />
    </View>
  </View>
);

export default ContactList;
