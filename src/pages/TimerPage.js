import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FooterDefault from '../components/defaults/FooterDefault';
import HeaderDefault from '../components/defaults/HeaderDefault';

export default function TimerPage({onChangePage}) {
    const [currentState, setState] = useState('timer');

  return (
    <View style={styles.page}>
        <HeaderDefault></HeaderDefault>
        <View style={styles.body}>
            <Text>Timerseite</Text>
        </View>
        <FooterDefault onChangePage={(arg) =>{onChangePage(arg)}}></FooterDefault>

    </View>
  );
}

const styles = StyleSheet.create({
    
    page: {
        flex: 1,
        // backgroundColor: '#f0f0f0',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    nav:{
        flex: 1,
    
    },
        body: {
        flex: 6,
        padding: 20,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    }
});
