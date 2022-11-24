import { StyleSheet, View, Text } from 'react-native';

export default function HeaderDefault() {
  return (
    <View style={styles.container}>
        <Text>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingBottom: 5,
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
