import { useState } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import stylesDefault from '../../styles/stylesDefault';
import TextInputDefault from '../defaults/TextInputDefault';


export default function TimeOptions(probs) {
  const [playerTime, setPlayerTime] = useState('60');
  const [prepareTime, setPrepareTime] = useState('120');

  return (
    <View>
      <Text style={styles.subtitle}>Zeiten</Text>
      <TextInputDefault prefix="Zeit Spieler" value={playerTime} onValueChange={(arg) => setPlayerTime(arg)} suffix="s" keyboardType="numeric" />
      <TextInputDefault prefix="Zeit Vorbereiten" value={prepareTime} onValueChange={(arg) => setPrepareTime(arg)} suffix="s" keyboardType="numeric" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    alignContent: 'center',
    marginVertical: 0,
    justifyContent: 'flex-end'
  },
  input: {
    ...stylesDefault.input,
    width: 200,
    marginHorizontal: 5,
    textAlignVertical: 'center',
  },
  text: {
    ...stylesDefault.text,
  },
  subtitle: {
    ...stylesDefault.subtitle,
  },
  removeButton: {
    paddingHorizontal: 10,
    paddingVertical: 0,
    fontSize: 32,
    fontWeight: '400',
  }

});
