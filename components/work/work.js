import styles from "./work.module.css";
import Link from "next/link";

function Work(props) {
  return (
    <Link href={props.link}>
      <div className={styles.work_card}>
        <img
          className={styles.work_img}
          src={props.image}
          alt={props.image_alt}
        />
        <div className={styles.work_card_title}>{props.title}</div>
        <div className={styles.work_card_description}>{props.description}</div>
      </div>
    </Link>
  );
}

export default Work;
