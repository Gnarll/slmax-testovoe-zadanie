import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit"


export interface ICommentAnswer  {
  id: string,
  parentId: string,
  title: string,
  date: string,
  commentText: string
}

const initialState: Array<ICommentAnswer> = [] 

export const CommentAnswerSlice = createSlice({
    name: 'CommentAnswer',
    initialState,
    reducers: {
      addCommentAnswer: (state, action: PayloadAction<ICommentAnswer>) => {
        state.unshift(action.payload)
      },
    }
})

export const { addCommentAnswer } = CommentAnswerSlice.actions
export default CommentAnswerSlice.reducer