import React, { useEffect } from "react";

import "../App.css";

const Parallax=(props) => {
    return(
        <div class="parallax">
            {props.children}
        </div>
    );
}

export default Parallax;