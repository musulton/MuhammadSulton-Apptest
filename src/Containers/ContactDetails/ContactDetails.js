import * as React from 'react';
import {View, Text, Image, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {ActionButton} from '../../Components';
import {validURL} from '../../Utils/Url';
import Constants from '../../Constants';
import {BASE_URL} from '../../Config';
import ContactActions from '../../Redux/Actions/Contact';

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

const renderEditButton = ({navigation, contact}) => (
  <ActionButton
    type={Constants.ACTION_BUTTON.EDIT}
    onPress={() =>
      navigation.navigate(Constants.ROUTES.FORM, {contact, isUpdateData: true})
    }
  />
);

const renderInfo = ({photo, age, firstName, lastName}) => (
  <View style={styles.infoContainer}>
    <Photo photo={photo} />
    <Bio firstName={firstName} lastName={lastName} age={age} />
  </View>
);

const renderAlertDialog = ({navigation, setShouldReload}) =>
  Alert.alert('Info', 'Data has been deleted', [
    {
      text: 'Ok',
      onPress: () => {
        setShouldReload(true);
        navigation.navigate(Constants.ROUTES.LIST);
      },
    },
  ]);

const handleDelete = props => () => {
  const {
    route: {params},
  } = props;
  axios.delete(`${BASE_URL}/contact/${params.id}`).then(() => {
    renderAlertDialog(props);
  });
};

const renderDeleteButton = props => (
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
            onPress: handleDelete(props),
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
    navigation,
    route: {params},
  } = props;
  const [contact, setContact] = React.useState(config.defaultContact);

  _useGetContactEffect({params, setContact});

  return (
    <View style={styles.container}>
      {renderInfo(contact)}
      {renderEditButton({navigation, contact})}
      {renderDeleteButton(props)}
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  setShouldReload: bindActionCreators(ContactActions.setShouldReload, dispatch),
});

export default connect(null, mapDispatchToProps)(ContactDetails);
