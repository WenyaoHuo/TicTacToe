import React from 'react';
import { View, Text} from 'react-native';
import styles from '../constants/color';
import TButton from '../components/TButton';
import { ScrollView } from 'react-native';

const Rules = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Rules of Tic Tac Toe...</Text>
        <TButton title="Back" onPress={() => navigation.goBack()} style={styles.actionButton}/>
      </ScrollView>
    </View>
  );
};

export default Rules;