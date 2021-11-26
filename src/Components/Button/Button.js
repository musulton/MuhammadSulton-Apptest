import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from '../../Containers/ContactForm/ContactForm.styles';

const Button = ({text, onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
