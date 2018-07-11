const purify = require('purify-css');
const sass = require('node-sass');

function concat() {
    sass.render(
        {
            file: '../styles/styles.css',
            data: '../styles/styles_.css',
        },
        function(err, result) {
            if (err) return console.log(err);
            if (result) {
                let content = '../index.html';
                let css = '../styles/styles_.css';
                let options = {
                    output: '../styles/styles.min.css',
                    min: true,
                };
                purify(content, css, options);
            }
        },
    );
}

concat();
