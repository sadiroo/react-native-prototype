import { ScrollView, StyleSheet, View } from 'react-native';
import FooterDefault from '../components/defaults/FooterDefault';
import HeaderDefault from '../components/defaults/HeaderDefault';
import PlayerListOptions from '../components/options/PlayerListOptions';
import TimeOptions from '../components/options/TimeOptions';
import stylesDefault from '../styles/stylesDefault';

export default function OptionsPage({ onChangePage }) {


    return (
        <View style={styles.page}>
            <HeaderDefault></HeaderDefault>
            <ScrollView style={styles.scrollView}>
                <TimeOptions></TimeOptions>
                <PlayerListOptions></PlayerListOptions>
            </ScrollView>
            {/* <View style={styles.body}>
                
            </View> */}
            <FooterDefault onChangePage={(arg) => { onChangePage(arg) }}></FooterDefault>

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
    scrollView: {
        ...stylesDefault.scrollView,
    }

});
