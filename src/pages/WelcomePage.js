import { Pressable, StyleSheet, Text, View } from 'react-native';
import HeaderDefault from '../components/defaults/HeaderDefault';
import stylesDefault from '../styles/stylesDefault';

export default function WelcomePage({ onChangePage }) {
    const timer = 'timer';
    return (
        <View style={styles.page}>
            <HeaderDefault></HeaderDefault>
            <View style={styles.body}>
                <Pressable onPress={() => onChangePage('timer')}>
                    <Text style={stylesDefault.button}>Timeransicht</Text>
                </Pressable>
                <Pressable onPress={() => onChangePage('options')}>
                    <Text style={stylesDefault.button}>Optionen</Text>
                </Pressable>
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
