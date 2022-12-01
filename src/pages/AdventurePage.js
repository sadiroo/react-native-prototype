import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateAdventure from '../components/adventure/CreateAdventure';
import ButtonDefault from '../components/defaults/ButtonDefault';
import FooterDefault from '../components/defaults/FooterDefault';
import HeaderDefault from '../components/defaults/HeaderDefault';
import stylesDefault from '../styles/stylesDefault';

export default function AdventurePage({ onChangePage }) {
    const adventureStates = Object.freeze({
        Inactive: 'inactive',
        Create: 'create',
        Prepare: 'prepare',
        Round: 'round',

    })
    const [adventureState, setAdventureState] = useState(adventureStates.Inactive);


    return (
        <View style={styles.page}>
            <HeaderDefault></HeaderDefault>
            <View style={styles.body}>
                {adventureState == adventureStates.Inactive &&
                    <ButtonDefault title='Neues Abenteuer' onPress={() => setAdventureState(adventureStates.Create)} />
                }
                {adventureState == adventureStates.Create &&
                    <View>
                        <CreateAdventure onAdventureCreated={setAdventureState(adventureStates.Prepare)}></CreateAdventure>
                    </View>
                }
                {adventureState == adventureStates.Prepare &&
                    <ButtonDefault title='Runde starten' onPress={() => setAdventureState(adventureStates.Round)} />
                }
                {adventureState == adventureStates.Round &&
                    <ButtonDefault title='Runde beenden' onPress={() => setAdventureState(adventureStates.Inactive)} />
                }
            </View>
            {adventureState != adventureStates.Inactive &&
                <ButtonDefault title='Abenteuer beenden' onPress={() => setAdventureState(adventureStates.Inactive)} />
            }
            <FooterDefault onChangePage={(arg) => { onChangePage(arg) }}></FooterDefault>

        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        ...stylesDefault.text,
    },
    page: {
        ...stylesDefault.page,
    },
    body: {
        ...stylesDefault.body,
    },
});
