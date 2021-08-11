import styles from "./404.module.css";

function Custom404() {
  return (
    <div className={styles.error}>
      <img alt="Paul Savoye 404" src="/svgs/paul-savoye.svg" />
      <div>404 - Page Not Found</div>
    </div>
  );
}

export default Custom404;
