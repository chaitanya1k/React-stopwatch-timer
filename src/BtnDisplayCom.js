import React from "react";
import "./styles.css";

const BtnDisplayCom = ({ start, status, stop, reset, resume }) => {
  return (
    <>
      {status === 0 ? (
        <div>
          <button onClick={start} className="btn">
            START
          </button>
        </div>
      ) : (
        ""
      )}
      {status === 1 ? (
        <div>
          <button onClick={stop} className="btn btnStart">
            STOP{" "}
          </button>
          <button onClick={reset} className="btn btnStart">
            RESET{" "}
          </button>
        </div>
      ) : (
        ""
      )}
      {status === 2 ? (
        <div>
          <button onClick={resume} className="btn btnStart">
            RESUME
          </button>
          <button onClick={reset} className="btn btnStart">
            RESET
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default BtnDisplayCom;
