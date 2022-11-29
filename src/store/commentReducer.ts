import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit"


export interface IComment  {
  id: string,
  parentId: string,
  title: string,
  commentText: string,
  date: string,
}

const initialState: Array<IComment> = [] 

export const CommentSlice = createSlice({
    name: 'Comment',
    initialState,
    reducers: {
      addComment: (state, action: PayloadAction<IComment>) => {
        state.unshift(action.payload)
      },
    }
})

export const { addComment } = CommentSlice.actions
export default CommentSlice.reducer