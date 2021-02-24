import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import "../App.css";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    padding: theme.spacing(5),
  },
  textContent: {
      textAlign: "Left",
  },

}));

const Projects = () => {
  const classes = useStyles();

  return (
    <div id="projects">
      <Grid
        container
        className={classes.rootContainer}
        justify="center"
        spacing={4}
        xs={11}
      >
        <Grid item xs={10} className="page-title">
          <Typography variant="h2" align="center" gutterBottom>
            Projects
          </Typography>
          <Divider variant="middle" />
        </Grid>

        <Grid item className={classes.textContent}>
          <Typography variant="body2" gutterBottom>
            My <b>Major project</b> was an anti theft device which we named ATD.
            As it was a group project I mostly dealt with the webapp side of the
            project, making the frontend and backend with the help of my friend{" "}
            <a href="https://erashishkumarmeena.wixsite.com/mycv/">
              Ashish</a>
            . As all of us were from ECE background and had very little to no
            prior experience with Web Development this proved to be a good
            challenge for us to complete. Frontend was made with the help of
            React.js, Javascript, HTML and CSS. While the Backend was powered by
            Express.js, Node.js and PostgreSQL all hosted on a 3$ Scaleway
            server. The basic idea of the project was to detect any intrusion
            attempts on the protected object by measuring differences in the
            various sensors we had attached such as weight, ultrasonic and
            accelerometer.
          </Typography>

          <Typography variant="body2" gutterBottom>
            My <b>Minor project</b> was a RF controlled Robot. The whole
            inspiration of designing a RF controlled Robot at that time came
            from a news we heard about a crash site where rescue teams couldn't
            go in themselves without putting themselves in grave danger,
            therefore we decided to design a compact sized robot that can be
            controlled remotely and do the job. It gave me the opportunity to
            practically learn how to design and print PCBs. PIC16F887 was the
            microcontroller we used to give life to our little robot and was
            controlled wirelessly through Radio Frequencies.
          </Typography>

          <Typography variant="body2" gutterBottom>
            I was able to indulge in many <b>DIY projects</b> while in College
            which mostly included me self-hosting some of the basic services we
            use in daily lives such as a file server, firewall, media server
            etc. These projects were a great learning experience for me and I
            was able to get familiar with UNIX and now I use Fedora as my daily
            driver with KDE environment (It's so beautiful). The most useful out
            of these was perhaps PFSENSE which is just a fantastic open-source
            Firewall which provides a lot of features. All of these Projects
            were hosted in either VMWare ESXI or just straight up KVM on Debian
            with Virtual Machine Manager as a GUI.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
