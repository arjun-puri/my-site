import React, { useEffect } from "react";

import { Grid, Typography, Hidden } from "@material-ui/core";

// import "../App.css";
import "./Navbar_3.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

const Navbar = (props) => {
  // to apply styles
  const classes = useStyles();

  // to handle generation of links
  const links = [
    { id: 0, name: "About Me", link: "#introduction" },
    { id: 1, name: "Skills", link: "#skillset" },
    { id: 2, name: "Projects", link: "#projects" },
    { id: 3, name: "Contact", link: "#contact" },
  ];

  const linksList = links.map((link) => {
    return (
      <Grid item>
        <a href={link.link}>
          <Typography variant="button">{link.name}</Typography>
        </a>
      </Grid>
    );
  });

  const burgLinksList = links.map((link) => {
    return (
        <Grid item xs={12}>
            <a href={link.link}>
                <Typography variant="button" gutterBottom>{link.name}</Typography>
            </a>
        </Grid>
    )
  });

  // end of link generation

  // handling the scrolling on page
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    var stickyNavTop = document.querySelector("#navbar-3").offsetTop;
    if (offset > stickyNavTop) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = [""];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  // end of scrolling logic


  // burg-links and burg-button logic

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [burgButton, setBurgButton] = React.useState(false);

  const handleNavbarOpen = () => {
    setNavbarOpen(!navbarOpen);
    setBurgButton(!burgButton);
  };

  let burgLinksClasses = ["burg-links"];
  if(navbarOpen){
      burgLinksClasses.push("expanded");
  }

  // end of burg-links logic
  return (
    <div id="navbar-3" className={[navbarClasses.join(" ") +" "+ classes.rootContainer]}>
      <Grid container alignItems="center" justify="space-around" spacing={4}>
        <Grid className="navbar-3-logo" item xs={4}>
          <a href="/">
            <Typography variant="h6">ARJUN PURI</Typography>
          </a>
        </Grid>

        {/* these are normal links when desktop sized */}
        <Hidden mdDown>
          <Grid
            container
            className="navbar-3-links"
            item
            xs={4}
            justify="space-between"
          >
            {linksList}
          </Grid>
        </Hidden>

        {/* this is the burger button */}
        <Hidden lgUp>
            <Grid item xs={4} className="burg-button">
                <FontAwesomeIcon icon={burgButton ? faTimes : faBars} size="2x" onClick={handleNavbarOpen} color="rgb(253, 236, 236)"></FontAwesomeIcon>
            </Grid>
        </Hidden>

      </Grid>

        {/* these are the dropdown links */}
        <Hidden lgUp>
        <Grid className={burgLinksClasses.join(' ')} container xs={12} alignItems="center" justify="center">
            {burgLinksList}
        </Grid>  
        </Hidden>
            

    </div>
  );
};

export default Navbar;
