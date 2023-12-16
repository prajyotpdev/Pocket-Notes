import React, { useEffect, useState } from "react";
import "../herocontainer/herocontainer.css";
import defaultsvg from "../../assets/system/default_svg.png";
import NoteForm from "../note/note";

const HeroContainer = (props) => {
  let { category } = props;

  useEffect(() => {}, [category]);

  return (
    <div className="app_main_container">
      {category == "" ? <img src={defaultsvg} alt="fireSpot" /> : null}
      {category && <NoteForm category={category} />}
    </div>
  );
};

export default HeroContainer;
