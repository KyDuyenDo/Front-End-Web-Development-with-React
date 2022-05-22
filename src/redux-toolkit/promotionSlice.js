import { PROMOTIONS } from "../shared/promotions";
import { createSlice } from "@reduxjs/toolkit";
export const promotionSlice = createSlice({
    name:'promotions',
    initialState:  PROMOTIONS,
    reducers:{
    }
})

export default promotionSlice.reducer