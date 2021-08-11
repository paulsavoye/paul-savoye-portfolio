import React, { useState, useRef } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import styles from "./competency.module.css";

function Competency(props) {
  const [value, setValue] = useState(0);
  const competencyRef = useRef();

  useScrollPosition(({ currPos }) => {
    const { offsetTop } = competencyRef.current;
    if (currPos.y * -1 > offsetTop - 700) setValue(props.percent);
  }, []);

  return (
    <div className={styles.competency} ref={competencyRef}>
      <div className={styles.competency_name}>{props.name}</div>
      <div className={styles.competency_bar}>
        <div className={styles.progress_bar_black} />
        <div
          className={styles.progress_bar_color}
          style={{
            backgroundColor: props.color,
            width: `${value}%`,
          }}
        />
      </div>
    </div>
  );
}

export default Competency;
