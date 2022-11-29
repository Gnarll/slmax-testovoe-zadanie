import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import commentAnswerReducer from './commentAnswerReducer';
import commentReducer from './commentReducer';
import datePickerReducer from './datePickerReducer';
import noteReducer from './noteReducer';
import themeReducer from './themeReducer';

export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;

const rootReducer = combineReducers({
  note: noteReducer,
  comment: commentReducer,
  commentAnswer: commentAnswerReducer,
  theme: themeReducer,
  datePicker: datePickerReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;