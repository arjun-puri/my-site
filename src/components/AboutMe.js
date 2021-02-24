import React from "react";

import "../App.css";
import {render} from "react-dom";
import { Grid, Typography } from "@material-ui/core";


class AboutMe extends React.Component {
    render() {
        return (
            <div id="about-me-content">
                
                        <Typography id="my-name" variant='h1' gutterBottom>
                            Arjun Puri
                        </Typography>
                        <Typography variant='h5' gutterBottom>
                            B.Tech Electronics and Communications (ECE)
                        </Typography>
                    
            </div>
        )
    }
}

export default AboutMe;