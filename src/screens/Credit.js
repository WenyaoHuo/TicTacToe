import React from 'react';
import { View, Text} from 'react-native';
import styles from '../constants/color';
import TButton from '../components/TButton';
import { ScrollView } from 'react-native';

const Credit = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Credits for the Tic Tac Toe game.........................................
          ...................................................................
          ...................................................................</Text>
        <TButton title="Back" onPress={() => navigation.goBack()} style={styles.actionButton} />
      </ScrollView>
    </View>
  );
};

export default Credit;