import React from "react";
import "../prevnote/prevnote.css";

function PrevNote(props) {
  var { data, createdAt } = props;

  return (
    <>
      <div className="note">
        <div className="content">{data}</div>
        <span className="date">{formatTime(createdAt)}</span>
      </div>
    </>
  );
}

const formatTime = (date) => {
  const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export default PrevNote;
