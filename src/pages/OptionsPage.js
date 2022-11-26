import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FooterDefault from '../components/defaults/FooterDefault';
import HeaderDefault from '../components/defaults/HeaderDefault';
import PlayerListOptions from '../components/options/PlayerListOptions';
import TimeOptions from '../components/options/TimeOptions';

export default function OptionsPage({ onChangePage }) {
    // setPlayerTime(60);
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
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    body: {
        flex: 6,
        padding: 20,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    scrollView: {
        marginHorizontal: 20,
        marginTop: 10,
    }

});
