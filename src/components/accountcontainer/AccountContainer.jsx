import React from "react";
import { useState } from "react";
import "./account_container.css";
import { MdAccountCircle } from "react-icons/md";

const $user_name = "Akshay";
const $public_id = "XYZABCDEFGHIJHKL";
const AccountContainer = () => {
  function handleClick() {
    setTimeout(() => {
      setButtonText("Sign Out");
    }, 1000); // 👈️ change text back after 1 second

    setButtonText("Signed OUT");
  }

  const [buttonText, setButtonText] = useState("Sign Out");
  return (
    <div id="app_account_container" className="app_account_container">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <MdAccountCircle color="#827" size={100} weight="100px" />
      </div>
      <p className="user-name ">Name : {$user_name}</p>
      <p className="public-id ">Public ID : {$public_id}</p>
      <div className="app_account_container_sign">
        <button
          type="button"
          className="app_account_container_sign-font"
          onClick={handleClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default AccountContainer;
