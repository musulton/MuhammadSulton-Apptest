import * as React from 'react';
import {View, Text, Image, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

import {ActionButton} from '../../Components';
import {validURL} from '../../Utils/Url';
import Constants from '../../Constants';
import {BASE_URL} from '../../Config';

import config from './ContactDetails.config';
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

const renderEditButton = (navigation, contact) => (
  <ActionButton
    type={Constants.ACTION_BUTTON.EDIT}
    onPress={() => navigation.navigate(Constants.ROUTES.FORM, contact)}
  />
);

const renderInfo = ({photo, age, firstName, lastName}) => (
  <View style={styles.infoContainer}>
    <Photo photo={photo} />
    <Bio firstName={firstName} lastName={lastName} age={age} />
  </View>
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

const _useGetContactEffect = ({params, setContact}) => {
  React.useEffect(() => {
    axios.get(`${BASE_URL}/contact/${params.id}`).then(response => {
      setContact(response.data.data);
    });
  }, []);
};

const ContactDetails = props => {
  const {
    route: {params},
  } = props;
  const [contact, setContact] = React.useState(config.defaultContact);

  _useGetContactEffect({params, setContact});

  return (
    <View style={styles.container}>
      {renderInfo(contact)}
      {renderEditButton(props.navigation, contact)}
      {renderDeleteButton(props)}
    </View>
  );
};

export default ContactDetails;
