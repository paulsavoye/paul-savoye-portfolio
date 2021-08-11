import { Link, scroller } from "react-scroll";
import styles from "./toolbar.module.css";
import { slide as Menu } from "react-burger-menu";
import React, { useState } from "react";
import { useRouter } from "next/router";

function pushAndScroll(router, scroll) {
  router.push("/").then(() => {
    if (scroll)
      scroller.scrollTo(scroll, {
        duration: 500,
        delay: 100,
        smooth: true,
        offset: -20,
      });
  });
}

function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <header className={styles.toolbar}>
      <Menu
        width={"70%"}
        right
        isOpen={open}
        onStateChange={(state) => setOpen(state.isOpen)}
      >
        <div
          onClick={() => {
            setOpen(false);
            pushAndScroll(router, "work");
          }}
        >
          Mon travail
        </div>
        <div
          onClick={() => {
            setOpen(false);
            pushAndScroll(router, "about");
          }}
        >
          À propos
        </div>
        <div
          onClick={() => {
            setOpen(false);
            pushAndScroll(router, "contact");
          }}
        >
          Me contacter
        </div>
      </Menu>
      <nav className={styles.toolbar__navigation}>
        <div className={styles.toolbar__logo}>
          <div
            onClick={() => pushAndScroll(router)}
            className={styles.toolbar__textlogo}
          >
            Paul SAVOYE
          </div>
        </div>
        <div className={styles.spacer} />
        <div className={styles.toolbar_navigation_items}>
          <ul>
            <li onClick={() => pushAndScroll(router, "work")}>Mon travail</li>
            <li onClick={() => pushAndScroll(router, "about")}>À propos</li>
            <li onClick={() => pushAndScroll(router, "contact")}>
              Me contacter
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
