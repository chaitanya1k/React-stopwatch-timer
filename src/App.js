import "./styles.css";
import BtnDisplayCom from "./BtnDisplayCom";
import DisplayComponent from "./DisplayComponent";
import { useState } from "react";

export default function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [inter, setInter] = useState(null);
  const [status, setStatus] = useState(0);

  let updateMs = time.ms,
    updateS = time.s,
    updateM = time.m,
    updateh = time.h;

  const run = () => {
    if (updateM === 60) {
      updateh++;
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateMs === 100) {
      updateS++;
      updateMs = 0;
    }
    updateMs++;
    return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateh });
  };

  const start = () => {
    run();
    setInter(setInterval(run, 10));
    setStatus(1);
  };

  const stop = () => {
    clearInterval(inter);
    setStatus(2);
  };

  const resume = () => start();

  const reset = () => {
    clearInterval(inter);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
    setStatus(0);
  };

  return (
    <div className="App">
      <DisplayComponent {...time} />
      <BtnDisplayCom
        start={start}
        status={status}
        stop={stop}
        reset={reset}
        resume={resume}
      />
    </div>
  );
}
