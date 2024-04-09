import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../constants/color';

// const Board = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.board}>
//         {['O', '', 'O', 'X', 'X', 'O', 'X', ' ', 'O'].map((cell, index) => (
//           <View key={index} style={styles.cell}>
//             <Text style={styles.cellText}>{cell}</Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// };

const Board = ({ squares, onCellPress }) => {
  return (
    <View style={styles.board}>
      {squares.map((cell, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.cell} 
          onPress={() => onCellPress(index)}
        >
          <Text style={styles.cellText}>{cell}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Board;