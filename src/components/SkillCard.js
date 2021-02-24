import React from "react";

import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "../App.css";

import "./faLib";

const useStyles = makeStyles((theme) => ({
    
}));

const SkillCard = (props) => {
    const classes = useStyles();

    const exp = "skill-"+((props.experience).toLowerCase());
    return(
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
            <FontAwesomeIcon size="2x" icon={props.icon}/>
          </div>
        </Grid>
        <Grid item xs={8} className="skill-text">
          <Typography variant="h5">{props.title}</Typography>
          <Typography variant="body1" className={exp}>
            Experience: {props.experience}
          </Typography>
          <Typography variant="caption">
            {props.tech}
          </Typography>
        </Grid>
      </Grid>
    );
}

export default SkillCard;