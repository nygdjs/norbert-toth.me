const purify = require("purify-css")

let content = "../index.html";
let css = "../styles/styles.css";
let options = {
    output: "../styles/styles.min.css",
    min: true
};

purify(content, css, options);
