import React, { useEffect } from "react";
import { Typography, Grid, Hidden } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "../App.css";
// import { render } from "react-dom";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    padding: theme.spacing(2),
  },
}));

const Navbar = () => {
  const classes = useStyles();

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
  } else {
    navbarLinks.push("not-expanded");
  }

  return (
    <header
      id="navbar-container"
      className={(navbarClasses.join(" "), classes.rootContainer)}
    >
      <Grid
        container
        xs={11}
        justify="space-around"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={4}>
          <a id="navbar-logo" href="/">
            <Typography variant="h6">ARJUN PURI</Typography>
          </a>
        </Grid>
        <Grid item container xs={8} justify="flex-end" alignItems="center">
          <Hidden lgUp>
            <FontAwesomeIcon
                id="burgButton"
              icon={faBars}
              size="2x"
              onClick={(e) => handleToggle(e)}
            ></FontAwesomeIcon>
          </Hidden>
          <Hidden mdDown>
            <ul className="navbar-links">
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
          </Hidden>
        </Grid>

        {/* makeshift code for burger links */}
        <Grid
          container
          justify="space-between"
          alignItems="center"
          item
          className={" burg-links "+navbarLinks.join(" ")}
          xs={12}
          spacing={1}
        >
          <Hidden lgUp>
            <Grid item xs={12}>
              <a href="#introduction">
                <Typography variant="button">about me</Typography>
              </a>
            </Grid>
            <Grid item xs={12}>
              <a href="#skillset">
                <Typography variant="button">skills</Typography>
              </a>
            </Grid>
            <Grid item xs={12}>
              <a href="#projects">
                <Typography variant="button">projects</Typography>
              </a>
            </Grid>
            <Grid item xs={12}>
              <a href="#contact">
                <Typography variant="button">contact</Typography>
              </a>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </header>
  );
};

export default Navbar;
