const copy = require('copy');

const filestoCopy = [
    './index.html',
    './robots.txt',
    './images',
    './scripts/lazy.js',
];

copy.each(filestoCopy, './docs', function(err, files) {
    if (err) throw err;
});

copy('./images/*.*', './docs/images', function(err, files) {
    if (err) throw err;
});
