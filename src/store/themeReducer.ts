import { createSlice } from "@reduxjs/toolkit";


export interface ITheme  {
  isDarkMode: boolean
}

const initialState : ITheme = {isDarkMode: false}

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
      toggleTheme: (state) => {
      return {...state, isDarkMode : !state.isDarkMode}
      },
    }
})

export const { toggleTheme } = ThemeSlice.actions
export default ThemeSlice.reducer