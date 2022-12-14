import { StyleSheet, View, TextInput, Text } from 'react-native';
import stylesDefault from '../../styles/stylesDefault';

export default function TextInputDefault(probs) {
  return (
    <View style={styles.inputView}>
      <Text style={styles.text}>{probs.prefix}</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={styles.input}
          value={probs.value}
          onChangeText={(text) => probs.onChangeText(text)}
          keyboardType={probs.keyboardType}
          selectTextOnFocus
        ></TextInput>
        <Text style={styles.text}>{probs.suffix}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    alignContent: 'center',
    marginVertical: 5,
    justifyContent: 'space-between'
  },
  input: {
    ...stylesDefault.input,
    width: 60,
    marginHorizontal: 5,
    textAlignVertical: 'center',
  },
  text: {
    ...stylesDefault.text,
  }

});
