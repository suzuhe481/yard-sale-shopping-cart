import { useState, useEffect } from "react";

import styles from "./ScrollToTopButton.module.css";

const ScrollToTopButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handles the position of the window.
  const handleScroll = () => {
    const position = window.scrollY;

    setScrollPosition(position);
  };

  // Scrolls to top of screen smoothly.
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          <button onClick={scrollToTop}>
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
