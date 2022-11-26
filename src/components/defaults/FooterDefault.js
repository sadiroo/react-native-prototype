import { StyleSheet, View } from 'react-native';
import ButtonDefault from './ButtonDefault';

export default function FooterDefault({ onChangePage }) {
  return (
    <View style={styles.container}>
      <ButtonDefault title='Optionen' onPress={() => { onChangePage('options') }}></ButtonDefault>
      {/* <Pressable onPress={()=> {onChangePage('options')}}>
        <Text style={stylesDefault.button}>Optionen</Text>
      </Pressable> */}
      <ButtonDefault title='Timer' onPress={() => { onChangePage('timer') }}></ButtonDefault>
      {/* <Pressable onPress={()=> {onChangePage('timer')}}>
        <Text style={stylesDefault.button}>Timer</Text>
      </Pressable>       */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    paddingHorizontal: 20,
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});
