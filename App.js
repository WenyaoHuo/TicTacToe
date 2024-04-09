import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Rules from './src/screens/Rules';
import Credit from './src/screens/Credit';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Rules" component={Rules} />
        <Stack.Screen name="Credits" component={Credit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
// export default function App() {
//   return (

//     // <View style={styles.container}>
//     //   <View style={styles.board}>
//     //     {['O', '', 'O', 'X', 'X', 'O', 'X', ' ', 'O'].map((cell, index) => (
//     //       <View key={index} style={[styles.cell]}>
//     //         <Text style={styles.cellText}>{cell}</Text>
//     //       </View>
//     //     ))}
//     //   </View>
//     // </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'grey',
//   },
//   board: {
//     width: 300,
//     height: 300,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     backgroundColor: 'orange',
//     borderWidth: 3,
//     borderColor: 'black',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignContent: 'center',

//   },
//   cell: {
//     width: '32%',
//     height: '32%',
//     backgroundColor: 'green',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   cellText: {
//     fontSize: 24,
//     color: 'white',
//   },
// });
