import { nanoid } from "nanoid"

export const getNotesFromLocalStorage = () => {
  try { 
    const persistedState = localStorage.getItem('notes')

    if (persistedState === null) return []

    if (persistedState) return JSON.parse(persistedState)
  }
  catch (e){ 
    console.error("Could not load notes from local storage", e)
    return []
  }
}

export const formatDate = (date: Date | undefined) => {
  if (!date) return ''

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = String(date.getFullYear()).slice(-2)

  const hours = date.getHours()
  const minutes = String(date.getMinutes()).padStart(2, '0')

  const ampm = hours >= 12 ? 'PM' : 'AM'
  const formattedHours = hours % 12 || 12

  return `${day}-${month}-${year} | ${formattedHours}:${minutes} ${ampm}`
}

export const getInitialNote = () => {
  return {
    id: nanoid(),
    name: '',
    content: '',
    createdAt: '',
    lastEditedAt: '',
  }
}