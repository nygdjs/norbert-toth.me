const critical = require('critical');
var sass = require('node-sass');

sass.render(
    {
        file: './styles/styles',
    },
    function(err, result) {
        /*...*/
    },
);

// critical.generate({
//     inline: true,
//     base: './',
//     src: 'index.html',
//     dest: 'docs/index.html',
//     minify: true,
//     width: 1300,
//     height: 9900,
// });
