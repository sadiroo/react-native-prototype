import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
    name: 'timer',
    initialState: {
        value: 0,
    },
    reducers: {
        setTime: (state, action) => {
            state.value = action.payload;
        },
    }
})

export const selectTime = state => {
    const minFloat = state.timer.value / 60;
    const min = Math.floor(minFloat);
    const sec = state.timer.value - min * 60;
    const minString = min < 10 ? "0" + min : min;
    const secString = sec < 10 ? "0" + sec : sec;
    return minString + ":" + secString;
}

export const selectTimeSeconds = state => state.timer.value;

export const { setTime } = timerSlice.actions;


export default timerSlice.reducer;