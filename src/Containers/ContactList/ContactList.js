import * as React from 'react';
import {ScrollView, View, RefreshControl} from 'react-native';
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

const renderContactItem = ({contactList, navigation}, {index, data}) => (
  <View key={data.id}>
    <ContactItem
      data={data}
      onPress={() =>
        navigation.navigate(Constants.ROUTES.DETAILS, {id: data.id})
      }
    />
    {contactList.length - 1 !== index && <Separator />}
  </View>
);

const _useGetContactListEffect = ({
  setContact,
  shouldReload,
  setShouldReload,
}) => {
  React.useEffect(() => {
    axios.get(`${BASE_URL}/contact`).then(response => {
      setContact(response.data.data);
      setShouldReload(false);
    });
  }, [shouldReload]);
};

const ContactList = props => {
  _useGetContactListEffect(props);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        refreshControl={
          <RefreshControl
            refreshing={props.shouldReload}
            onRefresh={() => props.setShouldReload(true)}
          />
        }>
        {props.contactList.map((data, index) =>
          renderContactItem(props, {data, index}),
        )}
      </ScrollView>
      {renderAddIcon(props.navigation)}
    </View>
  );
};

const mapStateToProps = state => ({
  contactList: state.contactReducers.contactList,
  shouldReload: state.contactReducers.shouldReload,
});

const mapDispatchToProps = dispatch => ({
  setContact: bindActionCreators(ContactActions.setContact, dispatch),
  setShouldReload: bindActionCreators(ContactActions.setShouldReload, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
