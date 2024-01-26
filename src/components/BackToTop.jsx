import React, { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const BackToTop = () => {
  const [backbtn, setBackbtn] = useState(false);
  const showBackToTop = () => {
    if (window.scrollY > 100) {
      setBackbtn(true);
    } else {
      setBackbtn(false);
    }
  };
  window.addEventListener("scroll", showBackToTop);
  return (
    <React.Fragment>
      <a
        href="/#"
        className={backbtn ? "scrollup show-scroll" : "scrollup"}
        id="scroll-up"
      >
        <i className="uil uil-arrow-up scrollup__icon">
          <ArrowUpwardIcon />
        </i>
      </a>
    </React.Fragment>
  );
};

export default BackToTop;
