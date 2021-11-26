import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  bioContainer: {
    flex: 1,
  },
  fullName: {
    fontSize: 20,
    fontWeight: '400',
  },
  ageContainer: {
    width: 40,
    padding: 2,
    backgroundColor: 'green',
    borderRadius: 20,
    marginTop: 5,
    alignItems: 'center',
  },
  age: {
    fontSize: 14,
    color: 'white',
  },
});
