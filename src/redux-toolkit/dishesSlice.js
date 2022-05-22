import {DISHES} from "../shared/dishes";
import { createSlice } from "@reduxjs/toolkit";
const dishesSlice = createSlice({
    name:'dishes',
    initialState:  DISHES,
    reducers:{
    }
})

export default dishesSlice.reducer