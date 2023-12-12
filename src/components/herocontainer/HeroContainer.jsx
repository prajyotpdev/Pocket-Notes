import React, { useEffect, useState } from "react";
import "../herocontainer/herocontainer.css";
import defaultsvg from "../../assets/system/default_svg.png";
import NoteForm from "../note/note";

const HeroContainer = (props) => {

  let { selectedLink } = props;

  useEffect(() => {
    // Update the component when selectedLink changes
    if (selectedLink !== "") {
  selectedLink === props? selectedLink =props : selectedLink;
    }
  }, [props]);

  
  const [notes, setNotes] = useState([]);
  const addNote = (newNote) => {
    setNotes([...notes, { ...newNote, id: notes.length + 1 }]);
    console.log(newNote);
  }
  return (
    <div id="app_main_container">
      <div className="container">
        {selectedLink == "" ? <img src={defaultsvg} alt="fireSpot" /> : null}:
        {selectedLink && <NoteForm addNote={addNote} category= {selectedLink}/>}
      </div>
      
    </div>
  );
};

export default HeroContainer;
