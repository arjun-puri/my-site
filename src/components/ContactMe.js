import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import "../App.css";

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        padding: theme.spacing(5),
    },
}));

const ContactMe = () => {
    const classes = useStyles();

    return(
        <div id="contact">
            <Grid container className={classes.rootContainer} justify="center" spacing={4} xs={11}>
                <Grid item xs={10} className="page-title">
                    <Typography variant="h2" align="center" gutterBottom>
                        Contact
                    </Typography>
                    <Divider variant="middle"/>
                    </Grid>

                <Grid item>
                    <Typography variant="body1" align="center">
                        You can reach me at <a href="mailto:arjunpuri@arjunpuri.me">arjunpuri@arjunpuri.me</a>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );

}   

export default ContactMe;