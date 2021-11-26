import * as React from 'react';
import {ScrollView, View} from 'react-native';

import {ActionButton, ContactItem, Separator} from '../../Components';
import styles from './ContactList.styles';
import Constants from '../../Constants';

const TEST = [
  {
    id: '93ad6070-c92b-11e8-b02f-cbfa15db428b',
    firstName: 'Bilbo',
    lastName: 'Baggins',
    age: 11,
    photo:
      'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
  },
  {
    id: 'b3abd640-c92b-11e8-b02f-cbfa15db428b',
    firstName: 'Lukes',
    lastName: 'Skywalker',
    age: 20,
    photo: 'N/A',
  },
  {
    firstName: 'alghifari',
    photo: 'N/A',
    lastName: 'fikri',
    age: 22,
    id: '2155d230-4e77-11ec-821a-dd51c39d0a9a',
  },
  {
    firstName: 'Cek',
    photo: 'N/A',
    lastName: 'Cok',
    age: 22,
    id: 'f65d7e00-4e82-11ec-821a-dd51c39d0a9a',
  },
  {
    firstName: 'Cak',
    photo: undefined,
    lastName: 'Cok',
    age: 22,
    id: 'f65d7e00-4e82-11ec-821a-dd51c39d0a9a',
  },
];

const ContactList = ({navigation}) => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {TEST.map((data, i) => (
        <View key={i}>
          <ContactItem
            data={data}
            onPress={() =>
              navigation.navigate(Constants.ROUTES.DETAILS, {
                data,
              })
            }
          />
          {TEST.length - 1 !== i && <Separator />}
        </View>
      ))}
    </ScrollView>
    <View style={styles.iconContainer}>
      <ActionButton
        type={Constants.ACTION_BUTTON.ADD}
        onPress={() => navigation.navigate(Constants.ROUTES.FORM)}
      />
    </View>
  </View>
);

export default ContactList;
