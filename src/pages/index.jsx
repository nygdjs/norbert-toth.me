import React from "react";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <h1>Hi people!</h1>
    <p>Nothing here just yet. 😿 But coming very soon..</p>
    <div className="links">
      <h3>In the meantime, find me on the internets:</h3>
      <a target="blank" href="https://twitter.com/nygdjs">
        twitter
      </a>
      <a target="blank" href="https://github.com/nygdjs">
        GitHub
      </a>
      <a target="blank" href="https://codepen.io/nygdjs/">
        Codepen
      </a>
      <a target="blank" href="https://www.linkedin.com/in/n0rbert-t0th/">
        LinkedIn (Ugh...)
      </a>
      <p>
        maybe check out my<a href="./cv">CV</a>
      </p>
      <p>
        or drop me a mail:
        <a href="mailto:hello@norbert-toth.me">hello@norbert-toth.me</a>
      </p>
    </div>
  </Layout>
);

export default IndexPage;
