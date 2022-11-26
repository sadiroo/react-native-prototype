import { configureStore } from "@reduxjs/toolkit";
import playerListReducer from "../features/playerList/playerListSlice";

export default configureStore({
    reducer: {
        playerList: playerListReducer,
    }
})