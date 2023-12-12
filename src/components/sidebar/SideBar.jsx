import React, { useState } from "react";
import HeroContainer from "../herocontainer/HeroContainer";
import AccountContainer from "../accountcontainer/AccountContainer";

import "./sidebar.css";

const SideBar = () => {
  const [selectedLink, setSelectedLink] = useState("");
  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="app_sidebar">
     <div className="app_sidebar_title">Pocket Notes</div> 
    <div className="app_sidebar_list">
      <div className="app_sidebar-links_container">
        
          <a href="#group1" onClick={() => handleLinkClick("Group1")}>
          <p>Group1
        </p>
          </a>
          <a href="#group2" onClick={() => handleLinkClick("Group2")}>
          
        <p>Group2</p>
          </a>
        <a href="#group3" onClick={() => handleLinkClick("Group3")}>
          <p>Group3</p>
        </a>
      </div>
      <div className="app_main_container">
        <HeroContainer selectedLink={selectedLink} />
        {/* <t><a href='#home'>Your Land Details</a></t>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quasi cum aspernatur minus. Nemo autem similique vitae quos iusto, praesentium voluptate sed assumenda quasi voluptatem exercitationem mollitia a quis eligendi!</p> */}
      </div>
    </div>
    </div>
    
  );
};

export default SideBar;