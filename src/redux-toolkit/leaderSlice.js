import { LEADERS } from "../shared/leaders";
import { createSlice } from "@reduxjs/toolkit";
const leaderSlice = createSlice({
    name:'leaders',
    initialState:  LEADERS,
    reducers:{
    }
})

export default leaderSlice.reducer