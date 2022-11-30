import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonDefault from '../components/defaults/ButtonDefault';
import FooterDefault from '../components/defaults/FooterDefault';
import HeaderDefault from '../components/defaults/HeaderDefault';
import stylesDefault from '../styles/stylesDefault';
import { useSelector, useDispatch } from 'react-redux';
import { selectTime, selectTimeSeconds, setTime } from '../features/timer/timerSlice';
import { selectPlayerTime, selectPrepareTime } from '../features/timer/timeOptionsSlice';

export default function TimerPage({ onChangePage }) {
    const time = useSelector(selectTime);
    const timeSeconds = useSelector(selectTimeSeconds);
    const playerTime = useSelector(selectPlayerTime);
    const prepareTime = useSelector(selectPrepareTime);
    const dispatch = useDispatch();
    const [intervalId, setIntervalId] = useState();
    let timeAsync;


    function startTimer(startTime, intervalId) {
        if (startTime <= 0) {
            dispatch(setTime(0));
            stopTimer();
            return;
        }
        dispatch(setTime(startTime));
        if (intervalId !== '') {
            stopTimer();
        }
        timeAsync = startTime;
        id = setInterval(() => {
            timeAsync--;
            dispatch(setTime(timeAsync));
            console.log(timeAsync);
            if (timeAsync <= 0) {
                clearInterval(id);
                stopTimer(id);
            }
        }, 1000)
        setIntervalId(id);
    }

    function stopTimer() {
        if (intervalId !== '') {
            clearInterval(intervalId);
            setIntervalId('');
        }
    }


    return (
        <View style={styles.page}>
            <HeaderDefault></HeaderDefault>
            <View style={styles.body}>
                <Text style={styles.textTime}>{time}</Text>
                <View style={{}}>
                    <ButtonDefault
                        title="Start Spielzug"
                        onPress={() => {
                            startTimer(playerTime)
                        }}></ButtonDefault>
                    <ButtonDefault
                        title="Start Vorbereitung"
                        onPress={() => {
                            startTimer(prepareTime)
                        }}></ButtonDefault>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        {intervalId !== '' ?
                            <ButtonDefault
                                icon="pause"
                                buttonStyle={styles.iconButtons}
                                onPress={() => { stopTimer() }}></ButtonDefault>
                            :
                            <ButtonDefault
                                icon="play-arrow"
                                buttonStyle={styles.iconButtons}
                                onPress={() => { startTimer(timeSeconds) }}></ButtonDefault>
                        }
                        <ButtonDefault
                            icon="stop"
                            buttonStyle={styles.iconButtons}
                            onPress={() => { startTimer(0) }}
                        ></ButtonDefault>
                        <ButtonDefault
                            icon="more-time"
                            title="30s"
                            buttonStyle={styles.iconButtons}
                            onPress={() => { startTimer(timeSeconds + 30) }}></ButtonDefault>
                    </View>


                </View>
            </View>
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
    textTime: {
        ...stylesDefault.text,
        fontSize: 80,
        marginVertical: 50,
    },
    iconButtons: {
        width: 100,
    }
});
