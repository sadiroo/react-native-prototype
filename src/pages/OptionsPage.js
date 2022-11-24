import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import FooterDefault from '../components/defaults/FooterDefault';
import HeaderDefault from '../components/defaults/HeaderDefault';
import TextInputDefault from '../components/defaults/TextInputDefault';
import stylesDefault from '../styles/styleDefault';

export default function OptionsPage({onChangePage}) {

  return (
    <View style={styles.page}>
        <HeaderDefault></HeaderDefault>
        <View style={styles.body}>
            <TextInputDefault prefix="Zeit spieler" suffix="s"/>
            <TextInputDefault prefix="Zeit vorbereiten" suffix="s"/>
        </View>
        <FooterDefault onChangePage={(arg) =>{onChangePage(arg)}}></FooterDefault>

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
    
});
