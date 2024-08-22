import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { FaRegEdit, FaRegTrashAlt  } from "react-icons/fa";
import './home.css'
import { removeNote } from "../../features/notes/notesSlice";

const Home = () => {
  const { notes } = useAppSelector(state => state.notes)

  const dispatch = useAppDispatch()

  return (
    <div className='home'>
      <h2 className='second-title'>Your Notes</h2>
      {notes?.length ? (
        <ul className='notes-list'>
          {notes?.map(note => (
            <li key={note.id} className="note-item">
              <Link to={`/edit-note/${note.id}`} className='note-edit-link'>
                <FaRegEdit size='1.25rem' className='note-icon' />
              </Link>
              <Link to={`/view-note/${note.id}`} className='note-view-link'>
                <div className='note-item-top'>
                  <h3 className='note-name'>{note.name}</h3>
                  <p className='note-content main-text'>{note.content}</p>
                </div>
                <div className='note-date main-text'>
                  <span className='note-date-text'>Created at:</span>
                  <span className='note-date-value'>{note.createdAt}</span>
                </div>
                <div className='note-date main-text'>
                  <span className='note-date-text'>Last edited at:</span>
                  <span className='note-date-value'>{note.lastEditedAt}</span>
                </div>
              </Link>
              <button
                className='note-remove-btn'
                onClick={() => dispatch(removeNote(note.id))}
              >
                <FaRegTrashAlt size='1.25rem' className='note-icon' />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-notes">
          <p className='main-text'>
            No notes found. Click 'Add Note' to get started.
          </p>
          <Link to='/add-note' className='add-note-btn primary-btn'>Add Note</Link>
        </div>
      )}
    </div>
  )
}

export default Home