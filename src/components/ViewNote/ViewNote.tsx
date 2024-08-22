import { Link, useParams } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import './view-note.css'
import { FaRegEdit } from "react-icons/fa"

const ViewNote = () => {
  const { noteId } = useParams<"noteId">()

  const note = useAppSelector(state => state.notes.notes.find(note => note.id === noteId))

  return (
    <div className='view-note'>
      <h2 className='second-title'>{note?.name}</h2>
      <div className='note-content'>
        <Link to={`/edit-note/${noteId}`} className='note-edit-link'>
          <FaRegEdit size='1.25rem' className='note-icon' />
        </Link>
        <p className='main-text'>{note?.content}</p>
        <div className='date-info main-text'>
          <p>Created at <span className='date-value'>{note?.createdAt}</span></p>
          <p>Last edited at <span className='date-value'>{note?.lastEditedAt}</span></p>
        </div>
      </div>
    </div>
  )
}

export default ViewNote