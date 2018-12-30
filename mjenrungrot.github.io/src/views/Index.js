// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";

import Main from "../layouts/Main";

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>About this site</h2>
          <p>A beautiful, responsive, react app written with ES2016.</p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more about me </p>
      <p>
        {" "}
        Source available{" "}
        <a href="https://github.com/mjenrungrot/mjenrungrot.github.io">here</a>
      </p>
      .
    </article>
  </Main>
);

export default Index;
