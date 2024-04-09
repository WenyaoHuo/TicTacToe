import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from '../constants/color'; 

const TButton = ({ title, onPress, disabled, style }) => (
  <TouchableOpacity 
    style={[style, disabled && styles.buttonDisabled]} 
    onPress={onPress}
    disabled={disabled}
  >
    
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);


export default TButton;