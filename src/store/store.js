import { configureStore } from "@reduxjs/toolkit";
import playerListReducer from "../features/playerList/playerListSlice";
import timeOptionsReducer from "../features/timer/timeOptionsSlice";
import timerReducer from "../features/timer/timerSlice";

export default configureStore({
    reducer: {
        playerList: playerListReducer,
        timeOptions: timeOptionsReducer,
        timer: timerReducer,
    }
})