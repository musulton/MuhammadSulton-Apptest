import {StyleSheet} from 'react-native';

import Colors from '../../Themes/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bioContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  distance: {
    marginVertical: 15,
  },
  fullname: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 25,
    color: Colors.text,
  },
  age: {
    fontSize: 15,
    backgroundColor: Colors.highlight,
    color: Colors.text2,
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 50,
    fontWeight: '500',
  },
});
