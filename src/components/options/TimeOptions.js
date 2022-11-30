import { StyleSheet, View, Text, } from 'react-native';
import stylesDefault from '../../styles/stylesDefault';
import TextInputDefault from '../defaults/TextInputDefault';
import { useSelector, useDispatch } from 'react-redux';
import { setPlayerTime, setPrepareTime, selectPlayerTime, selectPrepareTime } from '../../features/timer/timeOptionsSlice';

export default function TimeOptions() {
  const playerTime = useSelector(selectPlayerTime);
  const prepareTime = useSelector(selectPrepareTime);
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={styles.subtitle}>Zeiten</Text>
      <TextInputDefault
        prefix="Zeit Spielzug"
        value={playerTime}
        onValueChange={(arg) => dispatch(setPlayerTime(arg))}
        suffix="s"
        keyboardType="numeric" />
      <TextInputDefault
        prefix="Zeit Vorbereiten"
        value={prepareTime}
        onValueChange={(arg) => dispatch(setPrepareTime(arg))}
        suffix="s"
        keyboardType="numeric" />
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
