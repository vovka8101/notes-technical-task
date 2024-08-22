import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Note } from '../../types/types'
import { getNotesFromLocalStorage } from '../../utils/utils'

type NotesState = {
  notes: Note[]
}

const initialState: NotesState = {
  notes: getNotesFromLocalStorage()
}

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.unshift(action.payload)
    },
    removeNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(notes => notes.id !== action.payload)
    },
    editNote: (state, action: PayloadAction<{ id: string, updatedNote: Note }>) => {
      const { id, updatedNote } = action.payload
      const note = state.notes.find(note => note.id === id)

      if (note) {
        Object.assign(note, updatedNote)
      }
    }
  }
})

export const { addNote, removeNote, editNote } = notesSlice.actions
export default notesSlice.reducer