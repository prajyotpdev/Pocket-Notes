import React, { useEffect, useState } from "react";

const ListNotes = () => {
  const [notes, setNotes] = useState([]);

  const loadData = () => {
    const storedNotesData = JSON.parse(localStorage.getItem("myDataKey"));
    setNotes(...notes, storedNotesData);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    console.log("this is my note in local storage" + data);
    setNotes(data);
  }, [setNotes]);

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          {`Category: ${note.category}, Note: ${note.data}`}
        </li>
      ))}
    </ul>
  );
};

export default ListNotes;
