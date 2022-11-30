import { StyleSheet, View } from 'react-native';
import ButtonDefault from './ButtonDefault';
import stylesDefault from '../../styles/stylesDefault';

export default function FooterDefault({ onChangePage }) {
  return (
    <View style={styles.container}>
      <ButtonDefault icon='home' onPress={() => { onChangePage('welcome') }} />
      <ButtonDefault icon='star' onPress={() => { onChangePage('adventure') }} />
      <ButtonDefault icon='timer' onPress={() => { onChangePage('timer') }} />
      <ButtonDefault icon='settings' onPress={() => { onChangePage('options') }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...stylesDefault.footer,
  },
});
