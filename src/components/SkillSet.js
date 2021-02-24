import React from "react";
import { Grid, Typography, Button, Divider } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPager,
  faCloud,
  faLaptopCode,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

import "../App.css";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    padding: theme.spacing(5),
  },
}));

const SkillSet = () => {
  const classes = useStyles();

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
        <Divider variant="middle"/>
      </Grid>

      {/* a skill card */}
      <Grid
        container
        item
        xs={12}
        md={5}
        className="skill-card"
        align-items="center"
        justify="center"
      >
        <Grid item xs={4}>
          <div class="skill-icon">
            <FontAwesomeIcon size="2x" icon={faPager} />
          </div>
        </Grid>
        <Grid item xs={8} className="skill-text">
          <Typography variant="h5">Frontend Web Development</Typography>
          <Typography variant="body1" className="skill-intermediate">
            Experience: Intermediate
          </Typography>
          <Typography variant="caption">
            HTML5, CSS3, Javascript, React.js
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        item
        xs={12}
        md={5}
        className="skill-card"
        align-items="center"
        justify="center"
      >
        <Grid item xs={4}>
          <div class="skill-icon">
            <FontAwesomeIcon size="2x" icon={faDatabase} />
          </div>
        </Grid>
        <Grid item xs={8} className="skill-text">
          <Typography variant="h5">Backend Web Development</Typography>
          <Typography variant="body1" className="skill-advanced">
            Experience: Advanced
          </Typography>
          <Typography variant="caption">
            SQL(Oracle, PostgreSQL), Express.js, Node.js
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        item
        xs={12}
        md={5}
        className="skill-card"
        align-items="center"
        justify="center"
      >
        <Grid item xs={4}>
          <div class="skill-icon">
            <FontAwesomeIcon size="2x" icon={faLaptopCode} />
          </div>
        </Grid>
        <Grid item xs={8} className="skill-text">
          <Typography variant="h5">Software Engineering</Typography>
          <Typography variant="body1" className="skill-intermediate">
            Experience: Intermediate
          </Typography>
          <Typography variant="caption">Java, C, C++, Python</Typography>
        </Grid>
      </Grid>

      <Grid
        container
        item
        xs={12}
        md={5}
        className="skill-card"
        align-items="center"
        justify="center"
      >
        <Grid item xs={4}>
          <div class="skill-icon">
            <FontAwesomeIcon size="2x" icon={faCloud} />
          </div>
        </Grid>
        <Grid item xs={8} className="skill-text">
          <Typography variant="h5">Cloud Computing</Typography>
          <Typography variant="body1" className="skill-advanced">
            Experience: Advanced
          </Typography>
          <Typography variant="caption">
            AWS, Linux, Virtualization(LXC, KVM)
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={10}>
        <Divider variant="middle" />
      </Grid>

      {/* download resume button */}
      <Grid item xs={12}>
        <Button variant="contained" color="primary" disableElevation>
          Download Resume
        </Button>
      </Grid>
    </Grid>
    </div>
  );
};

export default SkillSet;
