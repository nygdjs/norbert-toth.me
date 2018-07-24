import { Link } from "gatsby";
import React from "react";

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: "linear-gradient(to right, #2C5364, #203A43, #0F2027)",
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
