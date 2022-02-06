import React, { useEffect } from "react";
import { Typography, Grid, Hidden } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "../App.css";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    var stickyNavTop = document.querySelector("#navbar-container").offsetTop;
    if (offset > stickyNavTop) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleToggle = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
    console.log(expanded);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = [""];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  let navbarLinks = ["navbar-links"];
  if (expanded) {
    navbarLinks.push("expanded");
  }

  return (
    <header id="navbar-container" className={navbarClasses.join(" ")}>
      <div id="navbar-container-left">
        <a id="navbar-logo" href="/">
          <Typography variant="h6">ARJUN PURI</Typography>
        </a>
      </div>
      <div id="navbar-container-right">
        <FontAwesomeIcon
          icon={faBars}
          onClick={(e) => handleToggle(e)}
        ></FontAwesomeIcon>
        <ul className={navbarLinks.join(" ")}>
          <li>
            <a href="#introduction">
              <Typography variant="button">about me</Typography>
            </a>
          </li>
          <li>
            <a href="#skillset">
              <Typography variant="button">skills</Typography>
            </a>
          </li>
          <li>
            <a href="#projects">
              <Typography variant="button">projects</Typography>
            </a>
          </li>
          <li>
            <a href="#contact">
              <Typography variant="button">contact</Typography>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
