import { StyleSheet } from 'react-native';
import { Button } from '@rneui/base';
import stylesDefault from '../../styles/stylesDefault';

export default function ButtonDefault(probs) {
  return (
    // <View style={styles.container}>
    //   <Pressable onPress={probs.onPress}>
    //     <Text style={[styles.button, probs.style]}>{probs.title}</Text>
    //   </Pressable>
    // </View>
    <Button
      buttonStyle={[styles.button, probs.buttonStyle]}
      containerStyle={styles.container}
      title={probs.title}
      titleStyle={styles.buttonText}
      color={styles.button.backgroundColor}
      onPress={probs.onPress}
      icon={{
        name: probs.icon,
        type: 'material',
        color: styles.buttonText.color,
        size: 30,
      }}
    >

    </Button>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  button: {
    ...stylesDefault.button,
  },
  buttonText: {
    ...stylesDefault.text,
  }

});
