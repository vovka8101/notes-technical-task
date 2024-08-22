import { useParams } from "react-router-dom"
import NoteForm from "../NoteForm/NoteForm"
import { useAppSelector } from "../../app/hooks"

const EditNote = () => {
  const { noteId } = useParams<"noteId">()

  const note = useAppSelector(state => state.notes.notes.find(note => note.id === noteId))

  return (
    <div className='edit-note'>
      <h2 className='second-title'>Edit Note</h2>
      <NoteForm note={note} />
    </div>
  )
}

export default EditNote