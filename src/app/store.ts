import { configureStore } from '@reduxjs/toolkit'
import notesReducer from '../features/notes/notesSlice'

export const store = configureStore({
  reducer: {
    notes: notesReducer
  },
})

store.subscribe(() => {
  const state = store.getState()
  try {
    const notes = JSON.stringify(state.notes.notes)
    localStorage.setItem('notes', notes)
  } catch (e) {
    console.error('Could not save notes to local storage', e)
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch