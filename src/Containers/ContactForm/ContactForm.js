import * as React from 'react';
import {TextInput, View, Alert} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {BASE_URL} from '../../Config';
import Constants from '../../Constants';
import ContactActions from '../../Redux/Actions/Contact';
import {Button, Camera} from '../../Components';

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

const renderAlertDialog = ({navigation, setShouldReload}, isUpdateData) => {
  const message = isUpdateData
    ? 'Data has been updated'
    : 'Data has been created';
  Alert.alert('Info', message, [
    {
      text: 'Ok',
      onPress: () => {
        setShouldReload(true);
        navigation.navigate(Constants.ROUTES.LIST);
      },
    },
  ]);
};

const handleSave = (props, contact, isUpdateData) => () => {
  axios.post(`${BASE_URL}/contact`, contact).then(() => {
    renderAlertDialog(props, isUpdateData);
  });
};

const handleEdit = (props, contact, isUpdateData) => () => {
  const {
    route: {params},
  } = props;
  axios.put(`${BASE_URL}/contact/${params?.contact.id}`, contact).then(() => {
    renderAlertDialog(props, isUpdateData);
  });
};

const renderButton = (props, contact) => {
  const {
    route: {params},
  } = props;
  const onPress = params?.isUpdateData ? handleEdit : handleSave;

  return (
    <View style={styles.buttonContainer}>
      <Button text="Cancel" onPress={props.navigation.goBack} />
      <Button
        text="Save"
        onPress={onPress(props, contact, params?.isUpdateData)}
      />
    </View>
  );
};

const _getStates = (preloadValue = {}) => {
  const {firstName: fn, lastName: ln, age: a} = preloadValue;
  const [firstName, setFirstName] = React.useState(fn);
  const [lastName, setLastName] = React.useState(ln);
  const [age, setAge] = React.useState(a ? a.toString() : '');
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
  const state = _getStates(params?.contact);

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera />
      </View>
      {renderForm(state)}
      {renderButton(props, state.contact)}
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  setShouldReload: bindActionCreators(ContactActions.setShouldReload, dispatch),
});

export default connect(null, mapDispatchToProps)(ContactForm);
