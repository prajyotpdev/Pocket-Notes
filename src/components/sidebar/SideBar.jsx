import React, { useContext, useEffect, useReducer, useState } from "react";
import HeroContainer from "../herocontainer/HeroContainer";
import AccountContainer from "../accountcontainer/AccountContainer";

import "./sidebar.css";
import mystore from "../../App";
import { CategorySelectedContext } from "../../server/category/category-context";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../redux/store";
import categoryReducer from "../../redux/reducers";

const SideBar = ({ handleCategoryClick }) => {
  const [categorychanged, setcategorychanged] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const [selectedLink, dispatchSideBarLink] = useReducer(categoryReducer, "");
  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const buttonClickHandler = (newCategory) => {
    handleCategoryClick(newCategory);
    // setSelectedLink(newCategory);
    dispatchSideBarLink({ type: "UPDATE_SELECTED_LINK", payload: newCategory });
    store.dispatch({
      type: "CHANGE_CATEGORY",
      payload: newCategory,
    });
  };

  return (
    <div className="app_sidebar">
      <div className="app_sidebar_title">Pocket Notes</div>
      <div className="app_sidebar-links_container">
        <a href="#group1" onClick={() => buttonClickHandler("Group1")}>
          <p>Group1</p>
        </a>
        <a href="#group2" onClick={() => buttonClickHandler("Group2")}>
          <p>Group2</p>
        </a>
        <a href="#group3" onClick={() => buttonClickHandler("Group3")}>
          <p>Group3</p>
        </a>
        <button onClick={() => buttonClickHandler("Group4")}>Click Me</button>
      </div>
    </div>
  );
};

export default SideBar;
