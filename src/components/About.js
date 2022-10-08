import React from "react";
import user from "../data/user";
import Links from "./Links";

function About(user) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{user.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      { /* add your <Links /> component here */}
       {/*<h3>Links
       <a href={user.links.github}>github</a>
        <a href={user.links.liinkedin}>linkedin</a>
      </h3>*/}
      <Links />
    </div>
  );
}

export default About; 
