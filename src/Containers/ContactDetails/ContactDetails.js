import * as React from 'react';
import {View, Text, Alert, ActivityIndicator} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {ActionButton, Avatar} from '../../Components';
import Constants from '../../Constants';
import {BASE_URL} from '../../Config';
import ContactActions from '../../Redux/Actions/Contact';
import Colors from '../../Themes/Colors';

import config from './ContactDetails.config';
import styles from './ContactDetails.styles';

const Bio = ({firstName, lastName, age}) => (
  <View style={styles.bioContainer}>
    <Text style={styles.fullname}>
      {firstName} {lastName}
    </Text>
    <Text style={styles.age}>{age}</Text>
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
    <Avatar uri={photo} size={300} />
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
        'Confirm',
        'Are you sure to delete?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Yes',
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

const _useGetContactEffect = ({params, setContact, setFetching}) => {
  React.useEffect(() => {
    setFetching(true);
    axios.get(`${BASE_URL}/contact/${params.id}`).then(response => {
      setContact(response.data.data);
      setFetching(false);
    });
  }, []);
};

const ContactDetails = props => {
  const {
    navigation,
    route: {params},
  } = props;
  const [fetching, setFetching] = React.useState(true);
  const [contact, setContact] = React.useState(config.defaultContact);

  _useGetContactEffect({params, setContact, setFetching});

  if (fetching) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.loading} />
      </View>
    );
  }

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
