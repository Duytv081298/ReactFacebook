import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Button from "./components/Button_Components"
import ChoiceCard from "./components/ChoiceCard_Component"

const CHOICES = [
  {
    name: 'hammer',
    uri: 'https://mpng.subpng.com/20180705/sfh/kisspng-rockpaperscissors-computer-icons-clip-art-paper-scissors-5b3e1287be5a43.5750598415307946317797.jpg'
  },
  {
    name: 'paper',
    uri: 'https://www.pinclipart.com/picdir/middle/51-511523_rock-paper-rock-paper-scissors-clipart-png-download.png'
  },
  {
    name: 'scissors',
    uri:'https://www.vhv.rs/dpng/d/535-5357819_rock-paper-scissors-png-transparent-png.png'
  }
];


export default function App() {

  const [gamePrompt, setGamePrompt] = useState('Choose your weapon!');
  const [scores, setScores] = useState(0);
  const [userChoice, setUserChoice] = useState({});
  const [computerChoice, setComputerChoice] = useState({});

  const onPress = playerChoice => {
    const [result, compChoice] = getRoundOutcome(playerChoice);

    const newUserChoice = CHOICES.find(choice => choice.name === playerChoice);
    const newComputerChoice = CHOICES.find(choice => choice.name === compChoice);

    setGamePrompt(result);
    setScores(getScores());
    setUserChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
  };
  const getRoundOutcome = userChoice => {
    const computerChoice = randomComputerChoice().name;
    let result;

    if (userChoice === 'hammer') {
      result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'paper') {
      result = computerChoice === 'hammer' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'scissors') {
      result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
    }

    if (userChoice === computerChoice) result = 'Tie game!';
    return [result, computerChoice];
  };
  const randomComputerChoice = () =>
    CHOICES[Math.floor(Math.random() * CHOICES.length)];


  const getResultColor = () => {
    let newScores = scores ;
    if (gamePrompt === 'Victory!') {
      newScores = scores + 1;
      return 'green';}
    if (gamePrompt === 'Defeat!'){
      newScores = scores - 1;
      return 'red';
    } 
    return null;
  };
  const getScores = () => {
    let newScores = scores ;
    if (gamePrompt === 'Victory!')  newScores = scores + 1;
    else if (gamePrompt === 'Defeat!' && newScores <= 0) newScores = 0;
    else if (gamePrompt === 'Defeat!')newScores = scores - 1;
    return newScores
  };

  

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, color: getResultColor() }}>{gamePrompt}</Text>
      <View style={styles.choicesContainer}>
        <ChoiceCard
          player="Player"
          choice={userChoice}
        />
        <Text style={{ color: '#250902' }}>vs</Text>
        <ChoiceCard
          player="Computer"
          choice={computerChoice}
        />
      </View>
      {
        CHOICES.map(choice => {
          return <Button key={choice.name} name={choice.name} uri={choice.uri} onPress={onPress} />;
        })
      }
      <Text style={{ fontSize: 35,  }}>Scores : {scores}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9ebee'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: 200,
    margin: 10,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#640D14',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { height: 5, width: 5 },
  },

});
