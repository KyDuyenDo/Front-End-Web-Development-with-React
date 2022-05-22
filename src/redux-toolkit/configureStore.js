
import commentReducer from "./commentSlice";
import leaderReducer from "./leaderSlice";
import promotionReducer from "./promotionSlice";
import dishesReducer from "./dishesSlice";
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        comments : commentReducer,
        leaders : leaderReducer,
        promotions : promotionReducer,
        dishes : dishesReducer
    },
})

export default store