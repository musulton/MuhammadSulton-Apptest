import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
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
    backgroundColor: '#f6f6f6',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'orange',
  },
});
