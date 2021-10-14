import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <h1>This is my about us page</h1>
      <p>letsz take the time to discuss more on this</p>
      <Link to="/">Home Page from Frankdinero</Link>
    </div>
  );
};

export default AboutUs;
