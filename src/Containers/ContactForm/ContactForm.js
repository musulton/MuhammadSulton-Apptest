import * as React from 'react';
import {TextInput, View, TouchableOpacity, Text, Alert} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {BASE_URL} from '../../Config';
import Constants from '../../Constants';
import ContactActions from '../../Redux/Actions/Contact';

import styles from './ContactForm.styles';

const renderForm = ({setter, contact}) => {
  const onChangeNumber = text => {
    const value = text.replace(/[^0-9]/g, '');
    setter.setAge(value);
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.field}
        onChangeText={setter.setFirstName}
        placeholder="First Name"
        value={contact.firstName}
      />
      <TextInput
        style={styles.field}
        onChangeText={setter.setLastName}
        placeholder="Last Name"
        value={contact.lastName}
      />
      <TextInput
        style={styles.field}
        onChangeText={onChangeNumber}
        placeholder="Age"
        value={contact.age}
        keyboardType="numeric"
        maxLength={3}
      />
    </View>
  );
};

const handleSave =
  ({navigation, setShouldReload}, contact) =>
  () => {
    axios.post(`${BASE_URL}/contact`, contact).then(response => {
      console.log('response', response);
      Alert.alert('Info', 'Data has been saved', [
        {
          text: 'Ok',
          onPress: () => {
            setShouldReload(true);
            navigation.navigate(Constants.ROUTES.LIST);
          },
        },
      ]);
    });
  };

const renderButton = (props, contact) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Cancel</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={handleSave(props, contact)}>
      <Text style={styles.buttonText}>Save</Text>
    </TouchableOpacity>
  </View>
);

const _getStates = preloadValue => {
  const _firstName = preloadValue?.firstName;
  const _lastName = preloadValue?.lastName;
  const _age = preloadValue?.age;
  const [firstName, setFirstName] = React.useState(_firstName);
  const [lastName, setLastName] = React.useState(_lastName);
  const [age, setAge] = React.useState(_age ? _age.toString() : '');
  const [photo, setPhoto] = React.useState('N/A');

  return {
    setter: {setFirstName, setLastName, setAge, setPhoto},
    contact: {firstName, lastName, age, photo},
  };
};

const ContactForm = props => {
  const {
    route: {params},
  } = props;
  const state = _getStates(params);

  return (
    <View style={styles.container}>
      {renderForm(state)}
      {renderButton(props, state.contact)}
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  setShouldReload: bindActionCreators(ContactActions.setShouldReload, dispatch),
});

export default connect(null, mapDispatchToProps)(ContactForm);
