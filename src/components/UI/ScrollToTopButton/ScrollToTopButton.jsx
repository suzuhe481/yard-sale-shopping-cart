import { useState, useEffect } from "react";

import styles from "./ScrollToTopButton.module.css";

const ScrollToTopButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;

    setScrollPosition(position);
  };

  var isVisible = false;
  if (scrollPosition > 800) {
    isVisible = true;
  } else {
    isVisible = false;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      {isVisible && (
        <div className={styles["button-container"]}>
          <button>
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
