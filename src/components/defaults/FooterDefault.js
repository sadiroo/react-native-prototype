import { StyleSheet, View, Text, Pressable } from 'react-native';
import stylesDefault from '../../styles/styleDefault';

export default function FooterDefault({onChangePage}) {
  return (
    <View style={styles.container}>
      <Pressable onPress={()=> {onChangePage('options')}}>
        <Text style={stylesDefault.button}>Optionen</Text>
      </Pressable>
      <Pressable onPress={()=> {onChangePage('timer')}}>
        <Text style={stylesDefault.button}>Timer</Text>
      </Pressable>
      {/* <Pressable onPress={()=> {onPageChange('optionen')}}>
        <Text style={stylesDefault.button}>Optionen</Text>
      </Pressable> */}
      
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
