import {StyleSheet} from 'react-native';

import Colors from '../../Themes/Colors';

export default StyleSheet.create({
  avatarBackground: size => ({
    width: size,
    height: size,
    borderRadius: 50,
    backgroundColor: Colors.avatar,
    justifyContent: 'center',
    alignItems: 'center',
  }),
});
