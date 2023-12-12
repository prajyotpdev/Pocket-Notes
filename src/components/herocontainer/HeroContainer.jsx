import React from "react";
import "../herocontainer/herocontainer.css";
import defaultsvg from "../../assets/system/default_svg.png";

const HeroContainer = (props) => {
  // const selectedLink = '';
  const { selectedLink } = props;
  return (
    <div id="app_main_container">
      <div className="container">
        {selectedLink == "" ? <img src={defaultsvg} alt="fireSpot" /> : null}:
        {selectedLink && <p>Selected link: {selectedLink}</p>}
      </div>
    </div>
  );
};

export default HeroContainer;
