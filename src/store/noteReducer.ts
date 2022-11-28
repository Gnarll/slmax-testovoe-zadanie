import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit"


export interface INote { 
  id: string ,
  title: string,
  shortDescription: string,
  description: string,
  date: string
}

const initialState: Array<INote> = [] 

export const NoteSlice = createSlice({
    name: 'Note',
    initialState,
    reducers: {
      addNote: (state, action: PayloadAction<INote>) => {
        state.push(action.payload)
      },
      deleteNote: (state, action: PayloadAction<string>) => {
       return state.filter((item) => item.id !== action.payload)
     },
    },
})

export const { addNote, deleteNote } = NoteSlice.actions
export default NoteSlice.reducer