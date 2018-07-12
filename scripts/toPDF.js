// var fs = require('fs');
// var pdf = require('html-pdf');

// var html = fs.readFileSync('./docs/index.html', 'utf8');

// var options = {
//     format: 'A4',
// };

// pdf.create(html, options).toFile('./docs/pdf/Norbert-Toth_CV_ENG.pdf', function(
//     err,
//     res,
// ) {
//     if (err) return console.log(err);
// });

const fs = require('fs');
const got = require('got');
const html = fs.readFile('./docs/index.html', 'utf8', function(err, data) {
    if (err) throw err;
    if (data) return data;
});
console.log(html);
// got.post('https://url-to-pdf-api.herokuapp.com/api/render', {
//     body: { html: html },
//     json: true,
// });
(async () => {
    try {
        const response = await got.post(
            'https://url-to-pdf-api.herokuapp.com/api/render',
            {
                body: { html: html },
                json: true,
            },
        );
        console.log(response.body);
        fs.writeFile('pdf.pdf', response.body, function(err) {
            if (err) {
                throw err;
            }
            console.log('The file was saved!');
        });
    } catch (err) {
        throw err;
    }
})();
