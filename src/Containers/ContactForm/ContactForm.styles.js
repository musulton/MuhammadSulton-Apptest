import {StyleSheet} from 'react-native';

import Colors from '../../Themes/Colors';

export default StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.backgroundScreen,
  },
  formContainer: {
    flex: 1,
  },
  field: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 50,
    padding: 15,
    backgroundColor: Colors.backgroundField,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cameraContainer: {
    alignItems: 'center',
  },
});
