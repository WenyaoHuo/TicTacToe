import React, { useState } from 'react';
import { View } from 'react-native';
import Board from '../components/Board';
import TButton from '../components/TButton';
import Title from '../components/Title'; 
import styles from '../constants/color';
import { createInitialState, makeMove } from '../datamodel/game';

const Home = ({ navigation }) => {

  const [history, setHistory] = useState([createInitialState()]);
  const [currentStep, setCurrentStep] = useState(0);

  const handleNewGame = () => {
    setHistory([createInitialState()]);
    setCurrentStep(0);
  };

  const handlePreviousMove = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };
  
  const handleNextMove = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, history.length - 1));
  };

  const isPreviousDisabled = currentStep === 0;
  const isNextDisabled = currentStep === history.length - 1;
  const isNewGameDisabled = currentStep === 0 && history[0].squares.every(cell => cell === null);

  const handleMove = (index) => {
    const historyUpToCurrentStep = history.slice(0, currentStep + 1);
    const current = historyUpToCurrentStep[currentStep];
    const squaresCopy = makeMove(current.squares, index, current.xIsNext);

    // Only update if the move is valid (square was empty and game not won)
    if (squaresCopy !== current.squares) {
      const newHistory = historyUpToCurrentStep.concat([{ squares: squaresCopy, xIsNext: !current.xIsNext }]);
      setHistory(newHistory);
      setCurrentStep(newHistory.length - 1);
    }
  };

  return (
    <View style={styles.container}>

      <Title text="Tic Tac Toe" />

      <View style={styles.buttonContainerTop}>
        <TButton title="<" onPress={handlePreviousMove} disabled={isPreviousDisabled} style={[styles.roundButton, isPreviousDisabled && styles.buttonDisabled]} />
        <TButton title="New Game" onPress={handleNewGame} disabled={isNewGameDisabled} style={[styles.button, isNewGameDisabled && styles.buttonDisabled]} />
        <TButton title=">" onPress={handleNextMove} disabled={isNextDisabled} style={[styles.roundButton, isNextDisabled && styles.buttonDisabled]} />
      </View>

      <Board squares={history[currentStep].squares} onCellPress={handleMove} />
      
      <View style={styles.buttonContainer}>
        <TButton title="Rules" onPress={() => navigation.navigate('Rules')} style={styles.actionButton} />
        <TButton title="Credits" onPress={() => navigation.navigate('Credits')} style={styles.actionButton}/>
      </View>
    </View>
  );
};



export default Home;