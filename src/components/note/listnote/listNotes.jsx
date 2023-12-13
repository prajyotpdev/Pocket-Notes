import React, { useState } from 'react'

const listNotes = () => {

  const [notes, setNotes] = useState([]);

  return (
  <ul>
    {notes.map((note) => (
      <li key={note.id}>
        {`Category: ${note.category}, Note: ${note.data}`}
      </li>
    ))}
  </ul>
  )
}

export default listNotes