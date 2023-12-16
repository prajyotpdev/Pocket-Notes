import React, { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import { connect } from "react-redux";
import notedata from "../../server/notes.json";
import "../../server/notes.json";
import * as fs from "browserify-fs";

const NoteForm = (props) => {
  const [notes, setNotes] = useState([]);
  var { category } = props;
  // const [newcategory, setnewcategory] = useState("");

  var addNote = (newNote) => {
    setNotes([...notes, { ...newNote, id: notes.length + 1 }]);
    console.log(notes);
  };

  const [noteData, setNoteData] = useState({
    data: "",
    category: "",
  });

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    noteData.category = category;
    setNoteData({ ...noteData, [name]: value });
  };

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(noteData);
    myFunction(e);
    setNoteData({
      data: "",
      category: "",
    });
  };

  function myFunction() {
    document.getElementById("myForm").reset();
  }

  return (
    <form onSubmit={handleSubmit} id="myForm">
      <label>
        Note:
        <input
          type="text"
          name="data"
          value={noteData.data}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">
        <IoSend />{" "}
      </button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  category: state.category, // assuming "category" is the key for category state
});

export default NoteForm;
