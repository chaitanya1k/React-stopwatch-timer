import React from "react";

const DisplayComponent = ({ ms, s, m, h }) => {
  return (
    <>
      {h >= 0 ? "" : <span>{h > 9 ? h : "0" + h}:</span>}
      <span>{m > 9 ? m : "0" + m}:</span>
      <span>{s > 9 ? s : "0" + s}:</span>
      <span>{ms > 9 ? ms : "0" + ms}</span>
    </>
  );
};

export default DisplayComponent;
