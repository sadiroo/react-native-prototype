import { StyleSheet, View, Pressable, Text } from 'react-native';
import stylesDefault from '../../styles/styleDefault';

export default function ButtonDefault(probs) {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={stylesDefault.button}>{probs.title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  
});
