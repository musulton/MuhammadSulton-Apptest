import * as React from 'react';
import {TextInput, View, TouchableOpacity, Text} from 'react-native';

import styles from './ContactForm.styles';

const renderForm = params => {
  const onChangeNumber = text => {
    const value = text.replace(/[^0-9]/g, '');
    params.setAge(value);
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.field}
        onChangeText={params.setFirstName}
        placeholder="First Name"
        value={params.firstName}
      />
      <TextInput
        style={styles.field}
        onChangeText={params.setLastName}
        placeholder="Last Name"
        value={params.lastName}
      />
      <TextInput
        style={styles.field}
        onChangeText={onChangeNumber}
        placeholder="Age"
        value={params.age}
        keyboardType="numeric"
        maxLength={2}
      />
    </View>
  );
};

const renderButton = () => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Cancel</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Save</Text>
    </TouchableOpacity>
  </View>
);

const _getStates = defaultValue => {
  const _firstName = defaultValue?.firstName;
  const _lastName = defaultValue?.lastName;
  const _age = defaultValue?.age;
  const [firstName, setFirstName] = React.useState(_firstName);
  const [lastName, setLastName] = React.useState(_lastName);
  const [age, setAge] = React.useState(_age ? _age.toString() : '');

  return {
    setter: {setFirstName, setLastName, setAge},
    state: {firstName, lastName, age},
  };
};

const ContactForm = props => {
  const {
    route: {params},
  } = props;
  const {setter, state} = _getStates(params);

  return (
    <View style={styles.container}>
      {renderForm({...setter, ...state})}
      {renderButton(state)}
    </View>
  );
};

export default ContactForm;
