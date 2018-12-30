// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

import CV from "../../data/cv.pdf";

const Info = () => (
  <section id="sidebar">
    <section id="intro">mjenrungrot[at]hmc.edu</section>
    <section className="short_description">
      <h2>About</h2>
      <p>Hello, I'm Teerapat Jenrungrot, a senior at Harvey Mudd College.</p>
      <p>
        To view myCVrrent CV, take a look at <Link to={CV}>Here</Link>
      </p>
    </section>

    <section id="footer">
      <ul>
        <li>LinkedIn</li>
        <li>GitHub</li>
      </ul>
    </section>
  </section>
);

export default Info;
