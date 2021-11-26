import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  avatarBackground: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    height: 200,
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
});
