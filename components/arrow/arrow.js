import arrowStyle from "./arrow.module.css";
import { useRouter } from "next/router";
import { scroller } from "react-scroll";

function Arrow() {
  const router = useRouter();

  return (
    <svg
      onClick={() =>
        router.push("/").then(() =>
          scroller.scrollTo("work", {
            duration: 500,
            delay: 100,
            smooth: true,
            offset: -20,
          })
        )
      }
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      className={arrowStyle.arrow}
    >
      <path
        fill="#FFFFFF"
        d="M506.134 241.843l-.018-.019-104.504-104c-7.829-7.791-20.492-7.762-28.285.068-7.792 7.829-7.762 20.492.067 28.284L443.558 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h423.557l-70.162 69.824c-7.829 7.792-7.859 20.455-.067 28.284 7.793 7.831 20.457 7.858 28.285.068l104.504-104 .018-.019c7.833-7.818 7.808-20.522-.001-28.314z"
      ></path>
    </svg>
  );
}

export default Arrow;
