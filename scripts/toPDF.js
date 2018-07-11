var fs = require('fs');
var pdf = require('html-pdf');

var html = fs.readFileSync('./docs/index.html', 'utf8');

var options = {
    format: 'A4',
};

pdf.create(html, options).toFile('./pdf/Norbert-Toth_CV_EN.pdf', function(
    err,
    res,
) {
    if (err) return console.log(err);
});
