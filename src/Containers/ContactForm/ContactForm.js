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
import Colors from '../../Themes/Colors';

const renderSuccessDialog = ({navigation, setShouldReload}, isUpdateData) => {
  const message = isUpdateData
    ? "Data has been updated, but sorry can't save the image"
    : "Data has been created, but sorry can't save the image";
  Alert.alert('Success', message, [
    {
      text: 'Ok',
      onPress: () => {
        setShouldReload(true);
        navigation.navigate(Constants.ROUTES.CONTACT);
      },
    },
  ]);
};

const renderFailedDialog = () => {
  Alert.alert('Error', "Sorry, we can't process your request", [
    {
      text: 'Ok',
    },
  ]);
};

const handleSave = (props, contact, isUpdateData) => () => {
  axios
    .post(`${BASE_URL}/contact`, contact)
    .then(() => {
      renderSuccessDialog(props, isUpdateData);
    })
    .catch(renderFailedDialog);
};

const handleEdit = (props, contact, isUpdateData) => () => {
  const {
    route: {params},
  } = props;
  axios
    .put(`${BASE_URL}/contact/${params?.contact.id}`, contact)
    .then(() => {
      renderSuccessDialog(props, isUpdateData);
    })
    .catch(renderFailedDialog);
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

const renderTextInput = opts => (
  <TextInput
    style={styles.field}
    placeholderTextColor={Colors.placeholder}
    {...opts}
  />
);

const renderForm = (props, {setter, contact}) => {
  const onChangeNumber = text => {
    const value = text.replace(/[^0-9]/g, '');
    setter.setAge(value);
  };

  return (
    <View style={styles.formContainer}>
      {renderTextInput({
        onChangeText: setter.setFirstName,
        placeholder: 'Enter first name',
        value: contact.firstName,
      })}
      {renderTextInput({
        onChangeText: setter.setLastName,
        placeholder: 'Enter last name',
        value: contact.lastName,
      })}
      {renderTextInput({
        onChangeText: onChangeNumber,
        placeholder: 'Enter age',
        value: contact.age,
        keyboardType: 'numeric',
        maxLength: 3,
      })}
      {renderButton(props, contact)}
    </View>
  );
};

const _getStates = (preloadValue = {}) => {
  const {firstName: fn, lastName: ln, age: a, photo: p} = preloadValue;
  const [firstName, setFirstName] = React.useState(fn);
  const [lastName, setLastName] = React.useState(ln);
  const [age, setAge] = React.useState(a ? a.toString() : '');
  const [photo, setPhoto] = React.useState(p);

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
        <Camera imgPhoto={state.contact.photo} />
      </View>
      {renderForm(props, state)}
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  setShouldReload: bindActionCreators(ContactActions.setShouldReload, dispatch),
});

export default connect(null, mapDispatchToProps)(ContactForm);
