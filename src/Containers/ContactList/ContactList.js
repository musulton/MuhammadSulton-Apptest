import * as React from 'react';
import {ScrollView, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';

import {ActionButton, ContactItem, Separator} from '../../Components';
import ContactActions from '../../Redux/Actions/Contact';
import {BASE_URL} from '../../Config';
import Constants from '../../Constants';

import styles from './ContactList.styles';

const renderAddIcon = navigation => (
  <View style={styles.iconContainer}>
    <ActionButton
      type={Constants.ACTION_BUTTON.ADD}
      onPress={() => navigation.navigate(Constants.ROUTES.FORM)}
    />
  </View>
);

const renderContactItem = ({data, navigation, i, contactList}) => (
  <View key={i}>
    <ContactItem
      data={data}
      onPress={() =>
        navigation.navigate(Constants.ROUTES.DETAILS, {
          data,
        })
      }
    />
    {contactList.length - 1 !== i && <Separator />}
  </View>
);

const _useFetchingEffect = setContact => {
  React.useEffect(() => {
    axios.get(`${BASE_URL}/contact`).then(response => {
      setContact(response.data.data);
    });
  }, []);
};

const ContactList = ({navigation, setContact, contactList}) => {
  _useFetchingEffect(setContact);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {contactList.map((data, i) =>
          renderContactItem({navigation, contactList, data, i}),
        )}
      </ScrollView>
      {renderAddIcon(navigation)}
    </View>
  );
};

const mapStateToProps = state => ({
  contactList: state.contactReducers.contactList,
});

const mapDispatchToProps = dispatch => ({
  setContact: bindActionCreators(ContactActions.setContact, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
