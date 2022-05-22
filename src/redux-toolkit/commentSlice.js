import { COMMENTS } from "../shared/comments";
import { createSlice } from "@reduxjs/toolkit";
const CommentSlice = createSlice({
    name:'comments',
    initialState:  COMMENTS,
    reducers:{
        addComment: (state, action) =>{
            state.push(action.payload)
            console.log(state)
        }
    }
})
export default CommentSlice.reducer 
export const {addComment} = CommentSlice.actions
