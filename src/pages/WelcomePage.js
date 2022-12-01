import { Pressable, StyleSheet, Text, View } from 'react-native';
import ButtonDefault from '../components/defaults/ButtonDefault';
import HeaderDefault from '../components/defaults/HeaderDefault';
import stylesDefault from '../styles/stylesDefault';

export default function WelcomePage({ onChangePage }) {
    const timer = 'timer';
    return (
        <View style={styles.page}>
            <HeaderDefault></HeaderDefault>
            <View style={styles.body}>
                <ButtonDefault onPress={() => onChangePage('adventure')} title='Abenteuer'></ButtonDefault>
                <ButtonDefault onPress={() => onChangePage('timer')} title='Timeransicht'></ButtonDefault>
                <ButtonDefault onPress={() => onChangePage('options')} title='Optionen'></ButtonDefault>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    page: {
        ...stylesDefault.page,
    },
    body: {
        ...stylesDefault.body,
    },
});
