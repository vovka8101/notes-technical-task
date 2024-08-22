import { useState } from "react"
import { formatDate, getInitialNote } from "../../utils/utils"
import { Note } from "../../types/types"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../app/hooks"
import { addNote, editNote } from "../../features/notes/notesSlice"
import './note-form.css'

type NoteFormProps = {
  note?: Note
}

const NoteForm = ({ note }: NoteFormProps) => {
  const [newNote, setNewNote] = useState<Note>(() => {
    if (!note) {
      return getInitialNote()
    } else {
      return note
    }
  })

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setNewNote(prevNote => ({
      ...prevNote,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const dateCreated = formatDate(new Date())

    if (!note) {
      dispatch(addNote({ 
        ...newNote,
        createdAt: dateCreated,
        lastEditedAt: dateCreated
      }))
    } else {
      dispatch(editNote({
        id: newNote.id,
        updatedNote: { ...newNote, lastEditedAt: formatDate(new Date())}
      }))
    }

    navigate('/')
  }

  const handleReset = () => {
    if (!note) {
      setNewNote(getInitialNote())
    } else {
      setNewNote(note)
    }
  }

  return (
    <form className='new-note-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name' className='label'>Name:</label>
          <input
            id='name'
            type='text'
            className='new-note-input new-note-input--name'
            name='name'
            placeholder='Note name'
            required
            maxLength={30}
            value={newNote.name}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='content' className='label'>Content:</label>
          <textarea
            id='content'
            name='content'
            placeholder='Note content'
            required
            className='new-note-input new-note-input--content'
            value={newNote.content}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <div className="new-note-btns">
            <button
              type='reset'
              disabled={!newNote.name && !newNote.content}
              onClick={handleReset}
              className='secondary-btn'
            >
              Reset
            </button>
            <button
              type='submit'
              disabled={!newNote.name || !newNote.content}
              className='primary-btn'
            >
              Submit
            </button>
          </div>
        </div>
      </form>
  )
}

export default NoteForm