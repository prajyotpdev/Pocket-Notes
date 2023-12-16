import React, { useEffect, useState } from "react";
import "../herocontainer/herocontainer.css";
import defaultsvg from "../../assets/system/default_svg.png";
import NoteForm from "../note/note";
import ListNotes from "../note/listnote/listNotes";

const HeroContainer = (props) => {
  let { category } = props;

  return (
    <div id="app_main_container">
      <div className="container">
        {category == "" ? <img src={defaultsvg} alt="fireSpot" /> : null}:
        {category && <NoteForm category={category} />}
        {category && <ListNotes />}
      </div>
    </div>
  );
};

export default HeroContainer;
