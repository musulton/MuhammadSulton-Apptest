import {StyleSheet} from 'react-native';

import Colors from '../../Themes/Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: Colors.actionIcon,
    borderRadius: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 10,
  },
  text: {
    color: Colors.text,
  },
});
