import { StyleSheet, View } from 'react-native';
import { Text } from '@rneui/base';
import stylesDefault from '../../styles/stylesDefault';

export default function HeaderDefault() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gloomhaven Timer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...stylesDefault.header,
  },
  text: {
    ...stylesDefault.text,
    fontSize: 30,
    fontWeight: 'bold',
  }


});
