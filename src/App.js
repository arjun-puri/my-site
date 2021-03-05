import logo from './logo.svg';
import './App.css';
import React from "react";
import { withStyles } from "@material-ui/core/styles";

import "normalize.css";
import "fontsource-roboto";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Parallax from "./components/Parallax";
import AboutMe from './components/AboutMe';
import Introduction from "./components/Introduction";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";


// import SkillSet from "./components/SkillSet";
import SkillSet from "./components/SkillSet_2";
import {skillData} from "./data/skillData";

import Navbar from "./components/Navbar_3/Navbar_3";
// import BurgLinks from './components/BurgLinks';
// import MyNavbar from '../../utopia_react_1/src/components/MyNavbar';

const styles = theme => ({
  "@global": {
    // MUI typography elements use REMs, so you can scale the global
    // font size by setting the font-size on the <html> element.
    html: {
      fontSize: 12,
      [theme.breakpoints.up("sm")]: {
        fontSize: 16
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 18
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 22
      }
    },
  }
});

function App() {
  return (
    <div className="App">
      <Navbar />
      <Parallax>
        <AboutMe/>
      </Parallax>
      <Introduction/>
      <SkillSet skills={skillData}/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}
const Kappa = withStyles(styles)(App);

export default Kappa;
