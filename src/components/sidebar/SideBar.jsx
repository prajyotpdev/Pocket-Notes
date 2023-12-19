import React, { useContext, useEffect, useReducer, useState } from "react";
import HeroContainer from "../herocontainer/HeroContainer";
import AccountContainer from "../accountcontainer/AccountContainer";

import "./sidebar.css";
import mystore from "../../App";
import { CategorySelectedContext } from "../../server/category/category-context";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../redux/store";
import categoryReducer from "../../redux/reducers";

let colors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"];

const SideBar = ({ handleCategoryClick }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [groups, setGroups] = useState([]);
  const [group, setGroup] = useState("");
  const [color, setcolor] = useState("");
  const [selectedColors, setselectedColors] = useState([]);
  const [selectedLink, dispatchSideBarLink] = useReducer(categoryReducer, "");

  const buttonClickHandler = (newCategory) => {
    handleCategoryClick(newCategory);
    dispatchSideBarLink({ type: "UPDATE_SELECTED_LINK", payload: newCategory });
    store.dispatch({
      type: "CHANGE_CATEGORY",
      payload: newCategory,
    });
  };
  const chooseColorHandler = (color) => {
    setselectedColors(...selectedColors, color);
  };

  const handleAddGrp = (e) => {
    e.preventDefault();
    setGroups([...groups, group]);
    console.log(selectedColors);
    setGroup("");
    setcolor("");
  };

  const modal = document.querySelector("#modal");
  const openModal = document.querySelector("#openModal");

  const closeModal = document.querySelector("#closeModal");

  if (modal) {
    openModal && openModal.addEventListener("click", () => modal.showModal());

    closeModal && closeModal.addEventListener("click", () => modal.close());
  }

  const handleInputChange = (e) => {
    const { value } = e.target;
    console.log("this is e.target.value : " + e.target.value);
    setGroup(value);
  };

  return (
    <div className="app_sidebar">
      <div className="app_sidebar_title">Pocket Notes</div>
      <div className="app_sidebar-links_container">
        {groups.map((group, index) => (
          <a href="#group" onClick={() => buttonClickHandler(group)}>
            <div
              style={{
                borderRadius: "50%",
                backgroundColor: selectedColors[index],
                width: "30px",
                height: "30px",
              }}
            ></div>
            <p>{group}</p>
          </a>
        ))}
        <dialog id="modal">
          <p>Create New Group</p>
          <label>Group Name </label>
          <input
            type="text"
            name="newgrp"
            id="newgrpinput"
            value={group}
            onChange={handleInputChange}
          />
          <br />
          <label>Choose Color : </label>
          {colors.map((color) => (
            <div
              onClick={() => chooseColorHandler(color)}
              style={{
                borderRadius: "50%",
                backgroundColor: color.toString(),
                width: "30px",
                height: "30px",
              }}
            ></div>
          ))}

          <br />
          <button
            id="closeModal"
            onClick={handleAddGrp}
            className="createbutton"
          >
            Create
          </button>
        </dialog>
        <button id="openModal" className="addcircle">
          +
        </button>
      </div>
    </div>
  );
};

export default SideBar;
