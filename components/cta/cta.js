import styles from "./cta.module.css";

export function CTAPrimary(props) {
  return (
    <a
      onClick={props.onClick}
      className={`${styles.cta_button} ${styles.primary}`}
    >
      {props.name}
    </a>
  );
}

export function CTASecondary(props) {
  return (
    <a
      href={props.href}
      onClick={props.onClick}
      className={`${styles.cta_button} ${styles.secondary}`}
    >
      {props.name}
    </a>
  );
}
