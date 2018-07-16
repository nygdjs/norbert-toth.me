const critical = require('critical');
const concat = require('concat');
const fs = require('fs');

// Create folder for concat
fs.mkdirSync('./docs/styles');

// Concat css files
concat(
    [
        './node_modules/normalize.css/normalize.css',
        './styles/modules/variables.css',
        './styles/modules/generic.css',
        './styles/modules/typography.css',
        './styles/styles.css',
    ],
    './docs/styles/styles.css',
);

// Inline critical css
critical.generate({
    inline: true,
    base: './',
    src: 'index.html',
    dest: 'docs/index.html',
    minify: true,
    width: 1300,
    height: 900,
});
