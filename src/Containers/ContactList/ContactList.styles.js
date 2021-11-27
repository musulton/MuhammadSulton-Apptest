import {StyleSheet} from 'react-native';

import Colors from '../../Themes/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundScreen,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  iconContainer: {
    height: 90,
    justifyContent: 'center',
    paddingHorizontal: 25,
    paddingBottom: 20,
  },
});
