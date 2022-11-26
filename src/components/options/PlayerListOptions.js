import { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import stylesDefault from '../../styles/stylesDefault';
import ButtonDefault from '../defaults/ButtonDefault';
import { useSelector, useDispatch } from 'react-redux';
import { editPlayer, removePlayer, selectPlayerList } from '../../features/playerList/playerListSlice';



export default function PlayerListOptions(probs) {
  const playerList = useSelector(selectPlayerList)
  const dispatch = useDispatch()


  const Player = ({ player }) => {
    const [tempName, setTempName] = useState(player.name)
    return (
      <View style={styles.inputView}>
        <View style={{ flexDirection: 'row' }}>
          {/* <TextInput
            style={styles.input}
            value={player.name}
            onChangeText={(text) => {
              dispatch(editPlayer({
                id: player.id,
                name: text,
              }))
            }}>
          </TextInput> */}
          <TextInput
            style={styles.input}
            value={tempName}
            onChangeText={text => { setTempName(text) }}
            onEndEditing={() => {
              dispatch(editPlayer({
                id: player.id,
                name: tempName,
              }))
            }}>
          </TextInput>
          <ButtonDefault icon="remove" onPress={() => dispatch(removePlayer(player))} style={styles.removeButton}>
          </ButtonDefault>
        </View>
      </View>
    )
  }

  return (
    <View>
      <Text style={styles.subtitle}>Spieler</Text>
      <Player player={playerList[0]}></Player>
      <Player player={playerList[1]}></Player>
      <Player player={playerList[2]}></Player>
      <Player player={playerList[3]}></Player>
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
    ...stylesDefault.subtitle
  },
  removeButton: {
    paddingHorizontal: 10,
    paddingVertical: 0,
    fontSize: 32,
    fontWeight: '400',
  }

});
