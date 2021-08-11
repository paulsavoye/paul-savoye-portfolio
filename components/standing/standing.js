import React, { useState, useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animatorJson from "../../public/lottiefiles/paul-savoye-animator.json";
import styles from "./standing.module.css";

function Standing() {
  const playerRef = useRef(null);

  return (
    <div onClick={() => playerRef.current.play()} className={styles.standing}>
      <Player
        autoplay
        src={animatorJson}
        ref={playerRef}
        style={{
          marginLeft: "-30px",
          marginRight: "-30px",
          marginTop: "-50px",
          marginBottom: "-30px",
        }}
      ></Player>
    </div>
  );
}

export default Standing;
