import React from "react";
import user from "../data/user";


function Links(props) {
 return(
    
        <h3>Links
        <a href={props.github}>{props.github}</a>       {/* we want the link appear like this //https://github.com/liza*/}
        <a href={props.linkedin}>{props.linkedin}</a>
        </h3>
 );
}
export default Links;