import React, { useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import HeroContainer from "../../components/herocontainer/HeroContainer";
import SideBar from "../../components/sidebar/SideBar";
import './homepage.css'

const HomePage = () => {
  const [category, setCategory] = useState("");
  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  return (
    <div className="homepage">
      <NavBar />
      <div className="app_sidebar_list">
      <div className="app_sidebar-links_container"><SideBar handleCategoryClick={handleCategoryClick} /></div>
      <div className="app_main_container"><HeroContainer category={category} /></div>
      </div>
    </div>
  );
};

export default HomePage;
