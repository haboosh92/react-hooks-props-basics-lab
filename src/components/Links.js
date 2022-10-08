import React from "react";
import user from "../data/user";

const links = user.links;
function Links(links) {
 return(
    
        <h3>Links
        <a href="{links.github}">github</a>
        <a href="{links.likedin}">linkedin</a>
        </h3>
    
 );
}
export default Links;