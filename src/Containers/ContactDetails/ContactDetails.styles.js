import {StyleSheet} from 'react-native';

import Colors from '../../Themes/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundScreen,
    paddingHorizontal: 20,
  },
  infoContainer: {
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bioContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  distance: {
    marginVertical: 15,
  },
  fullname: {
    fontSize: 25,
  },
  age: {
    fontSize: 15,
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 50,
  },
});
