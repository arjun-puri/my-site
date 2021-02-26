import React from "react";
import { Grid, Typography, Button, Divider } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import myResume from "../assets/my_resume.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPager,
  faCloud,
  faLaptopCode,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

import SkillCard from "./SkillCard";

import "../App.css";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    padding: theme.spacing(5),
  },
}));

const SkillSet = (props) => {
  const classes = useStyles();

  const skillList = props.skills.map((skill) => {
    return (
      <SkillCard
        key={skill.id}
        icon={skill.icon}
        title={skill.title}
        experience={skill.experience}
        tech={skill.tech}
      />
    );
  });

  return (
    <div id="skillset">
      <Grid
        className={classes.rootContainer}
        container
        wrap="wrap"
        justify="space-around"
        spacing={4}
        xs={11}
      >
        {/* this is page title */}
        <Grid item xs={10} className="page-title">
          <Typography variant="h2" align="center" gutterBottom>
            Skills
          </Typography>
          <Divider variant="middle" />
        </Grid>

        {/* a skill card */}
        {skillList}

        <Grid item xs={10}>
          <Divider variant="middle" />
        </Grid>

        {/* download resume button */}
        <Grid item xs={12}>
          <a href={myResume} download="arjun's resume.pdf">
            <Button variant="contained" color="primary" disableElevation>
              Download Resume
            </Button>
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default SkillSet;
