const copy = require('copy');

const filestoCopy = [
    './404.html',
    './android-chrome-192x192.png',
    './android-chrome-512x512.png',
    './apple-touch-icon.png',
    './browserconfig.xml',
    './favicon-16x16.png',
    './favicon-32x32.png',
    './favicon.ico',
    './mstile-150x150.png',
    './robots.txt',
    './safari-pinned-tab.svg',
    './site.webmanifest',
    './images'
]

copy.each(filestoCopy, './docs', function (err, files) {
    if (err) throw(err);
});

copy('./images/*.*', './docs/images', function (err, files) {
    if (err) throw (err);
});

copy('./pdf/*.*', './docs/pdf', function(err, files) {
    if (err) throw err;
});