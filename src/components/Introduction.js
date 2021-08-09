import { React } from 'react';
import { Typography, Grid, Divider } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import arjun_image from '../assets/arjun_puri.jpeg';

import '../App.css';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    padding: theme.spacing(5),
  },
  pageTitle: {},
  textContent: {
    textAlign: 'Left',
  },
}));

const Introduction = () => {
  const classes = useStyles();

  return (
    <div id='introduction'>
      <Grid
        container
        className={classes.rootContainer}
        spacing={4}
        justify='center'
        xs={11}
      >
        <Grid item xs={10} className={classes.pageTitle}>
          <Typography variant='h2' align='center' gutterBottom>
            About Me
          </Typography>
          <Divider variant='middle' />
        </Grid>

        <Grid container item xs={12} justify='center' id='my-image-container'>
          <Grid item xs={6} sm={4} md={2}>
            <img id='my-image' src={arjun_image} />
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.textContent}>
          <Typography variant='body2' gutterBottom>
            I am an alumnus of MSIT, Janakpuri which is affliated to Guru Gobind
            Singh Indraprastha University (GGSIPU) who graduated with a B.Tech
            in Electronics and Communications (ECE).
          </Typography>

          <Typography variant='body2' gutterBottom>
            From an early age I've been fascinated with Electronics and
            consequently Computers. Games like Warcraft III, Pokemon and Mario
            formed a great part of my childhood entertainment and lead me to
            dream that I could one day make something similar that fills others
            with similar awe and joy as I was when I played them.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Introduction;
