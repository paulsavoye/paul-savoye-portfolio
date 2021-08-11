import styles from "./tag.module.css";

function hexToRgbA(hex, opacity) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
      "," +
      opacity +
      ")"
    );
  }
  throw new Error("Bad Hex");
}

export default function Tag({ tagName }) {
  return (
    <div className={styles.tag_container}>
      <div
        style={{
          backgroundColor: hexToRgbA(tagsColors[tagName], 0.3),
          borderColor: tagsColors[tagName],
        }}
        className={styles.tag}
      >
        {tagName}
      </div>
    </div>
  );
}

const tagsColors = {
  "React-Native": "#00AAE0",
  "Bluetooth Low Energy": "#0044F4",
  HTML: "#00AB26",
  CSS: "#EE5253",
  Javascript: "#FED602",
  Leaflet: "#00DE8E",
  Python: "#F45800",
  "C++": "#FF9F43",
  OpenCV: "#FFE6C0",
  "Robot Operating System": "#1DD1A1",
  "Raspberry Pi": "#67FF88",
  Microcontrôleurs: "#f196ff",
  PCB: "#169403",
  Tensorflow: "#6370ff",
};
