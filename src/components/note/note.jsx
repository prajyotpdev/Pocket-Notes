import React, { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import { connect } from "react-redux";
import notedata from "../../server/notes.json";
import "../../server/notes.json";
import "./note.css";
import PrevNote from "./listnote/prevnote/prevnote";

const NoteForm = (props) => {
  const [notes, setNotes] = useState([]);
  var [prevNotes, setprevNotes] = useState([]);
  var { category } = props;
  // const [newcategory, setnewcategory] = useState("");

  function loadData() {
    const storedNotesData = JSON.parse(localStorage.getItem("Notes") || "[]");
    setprevNotes((prevNotes = storedNotesData));
  }

  var addNote = (newNote) => {
    setNotes([...notes, { ...newNote, id: notes.length + 1 }]);
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
  }, [notes.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    addNote(noteData);
    clearForm(e);
    setNoteData({
      data: "",
      category: "",
    });
    loadData();
  };

  function validateForm() {
    if (noteData.data == 0) {
      alert("Invalid Form, Note cannot be empty");
      return true;
    }
  }

  function clearForm() {
    document.getElementById("myForm").reset();
  }

  const ulRef = useRef();

  return (
    <>
      <div className="categorynametile">{category}</div>
      <div className="prevnotesdiv">
        <ul className="prevchatdivlist">
          {notes
            .filter((note) => note.category === category)
            .map((prevNote) => (
              <PrevNote data={prevNote.data} date={prevNote.date} />
            ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit} id="myForm" className="myform" ref={ulRef}>
        <label>
          <input
            type="text"
            name="data"
            value={noteData.data}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit" id="sendbutton">
          <IoSend />{" "}
        </button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  category: state.category, // assuming "category" is the key for category state
});

export default NoteForm;
