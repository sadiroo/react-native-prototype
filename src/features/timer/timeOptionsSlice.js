import { createSlice } from "@reduxjs/toolkit";

export const timeOptionsSlice = createSlice({
    name: 'timeOptions',
    initialState: {
        value: {
            playerTime: '60',
            prepareTime: '120',
        }
    },
    reducers: {
        setPlayerTime: (state, action) => {
            state.value.playerTime = action.payload;
        },
        setPrepareTime: (state, action) => {
            state.value.prepareTime = action.payload;
        }
    }
})

export const { setPlayerTime, setPrepareTime } = timeOptionsSlice.actions;

export const selectPlayerTime = state => state.timeOptions.value.playerTime;
export const selectPrepareTime = state => state.timeOptions.value.prepareTime;

export default timeOptionsSlice.reducer;