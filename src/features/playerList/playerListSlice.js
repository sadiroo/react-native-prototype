import { createSlice } from "@reduxjs/toolkit";

export const playerListSlice = createSlice({
    name: 'playerList',
    initialState: {
        value: [
            { id: 0, name: "sadiro" },
            { id: 1, name: "" },
            { id: 2, name: "" },
            { id: 3, name: "" },
        ]
    },
    reducers: {
        editPlayer: (state, action) => {
            state.value[action.payload.id].name = action.payload.name;
        },
        removePlayer: (state, action) => {
            state.value[action.payload.id].name = ''
        },
        resetPlayer: (state) => {
            state.value.forEach(val => {
                val.name = ''
            })
        },
    }
})

export const { editPlayer, addPlayer, resetPlayer, removePlayer } = playerListSlice.actions

export const selectPlayerList = state => state.playerList.value

export default playerListSlice.reducer