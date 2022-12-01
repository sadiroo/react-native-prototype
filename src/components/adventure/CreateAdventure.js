import { StyleSheet, View, Text } from 'react-native';
import stylesDefault from '../../styles/stylesDefault';
import ButtonDefault from '../defaults/ButtonDefault';

export default function CreateAdventure(probs) {

  return (
    <View>
      <Text style={styles.text}>Wähle deine Mitspieler und Gegner</Text>
      <ButtonDefault title='Abenteuer starten' onPress={() => probs.onAdventureCreated()} />
    </View>
  );
}

const styles = StyleSheet.create({
  text:{ ...stylesDefault.text,}
}
);
