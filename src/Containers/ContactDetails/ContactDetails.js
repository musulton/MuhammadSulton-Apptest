import * as React from 'react';
import {View, Text, Image, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {ActionButton} from '../../Components';
import {validURL} from '../../Utils/Url';
import Constants from '../../Constants';
import styles from './ContactDetails.styles';

const Photo = ({photo}) => {
  const withPhoto = validURL(photo);
  if (withPhoto) {
    return <Image source={{uri: photo}} style={styles.avatarBackground} />;
  }

  return (
    <View style={styles.avatarBackground}>
      <Icon name="user" size={40} color="#fff" />
    </View>
  );
};

const Bio = ({firstName, lastName, age}) => (
  <View style={styles.bioContainer}>
    <Text>
      {firstName} {lastName}
    </Text>
    <Text>{age}</Text>
  </View>
);

const renderEditButton = ({navigation, route: {params}}) => (
  <ActionButton
    type={Constants.ACTION_BUTTON.EDIT}
    onPress={() => navigation.navigate(Constants.ROUTES.FORM, params.data)}
  />
);

const renderDeleteButton = ({navigation, route: {params}}) => (
  <ActionButton
    type={Constants.ACTION_BUTTON.DELETE}
    onPress={() =>
      Alert.alert(
        'Are you sure?',
        'Too bad to cut off communication',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Ok',
            onPress: () => console.log('Delete'),
          },
        ],
        {
          cancelable: true,
        },
      )
    }
  />
);

const ContactDetails = props => {
  const {
    route: {params},
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Photo photo={params.data.photo} />
        <Bio
          firstName={params.data.firstName}
          lastName={params.data.lastName}
          age={params.data.age}
        />
      </View>
      {renderEditButton(props)}
      {renderDeleteButton(props)}
    </View>
  );
};

export default ContactDetails;
