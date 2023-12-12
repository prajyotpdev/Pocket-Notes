import React, { useEffect, useState } from 'react';
import { IoSend } from "react-icons/io5";

const NoteForm = (props) => {

  let  { addNote ,category} = props;

  const [noteData, setNoteData] = useState({
    data: '',
    category: category,
  });

  
  useEffect(() => {
    // Update the component when selectedLink changes
    ({ addNote ,category} = props)
  }, [props]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNoteData({ ...noteData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(noteData);
    // You can send the data to your backend or update local storage here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Note:
        <input type="text" name="data" value={noteData.data} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit"><IoSend/> </button>
    </form>
  );
};

export default NoteForm;
