import {StyleSheet} from 'react-native';

import Colors from '../../Themes/Colors';

export default StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  formContainer: {
    flex: 1,
  },
  field: {
    height: 50,
    margin: 12,
    borderWidth: 1.5,
    borderColor: Colors.fieldBorder,
    borderRadius: 15,
    padding: 15,
    backgroundColor: Colors.field,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cameraContainer: {
    alignItems: 'center',
  },
});
