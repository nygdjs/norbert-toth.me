var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./index.html', 'utf8');
var options = {
    format: 'A4'
};

pdf.create(html, options).toFile('./pdf/Norbert-Toth_CV_2018_EN.pdf', function (err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
});
