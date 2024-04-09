import { StyleSheet } from 'react-native';

export const colors = {
  boardBackground: 'orange',
  cellBackground: 'green',
  textColor: 'white',
  containerBackground: 'grey',
  buttonBackground: 'blue', 
  buttonDisabled: '#cccccc', 
};

export const styles = StyleSheet.create({
  titleContainer: {
    width: '90%',
    alignItems: 'center',
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'green', 
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 16, 
  },
  titleText: {
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 18, 
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.containerBackground,
    padding: 20,
  },
  board: {
    width: '90%',
    aspectRatio: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: colors.boardBackground,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 20,
  },
  cell: {
    width: '32%',
    height: '32%',
    backgroundColor: colors.cellBackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  cellText: {
    fontSize: 24,
    color: colors.textColor,
  },
  button: {
    backgroundColor:colors.buttonBackground,
    paddingVertical: 10,
    paddingHorizontal: 30,
    margin: 5,
    borderRadius: 20,
    elevation: 2, // Add shadow for Android 
    minWidth: 100, 
  },
  roundButton: {
    // New style for the "<" and ">" buttons
    backgroundColor: 'blue',
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginHorizontal: 5, 
  },
  actionButton: {
    backgroundColor:colors.buttonBackground,
    paddingVertical: 10,
    paddingHorizontal: 30,
    margin: 5,
    borderRadius: 20,
    minWidth: 100, 
  },
  buttonText: {
    color: colors.textColor,
    textAlign: 'center',
    fontSize: 18,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonContainerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    width: '100%', 
    alignItems: 'center',
    maxHeight: 80,
  },
  buttonDisabled: {
    backgroundColor: colors.buttonDisabled, 
  },
});

export default styles;