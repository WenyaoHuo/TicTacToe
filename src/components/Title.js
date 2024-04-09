import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from '../constants/color'; 

const Title = ({ text }) => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{text}</Text>
      </View>
    );
};


export default Title;