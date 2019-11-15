const puppeteer = require('puppeteer');

async function printPDF() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('../index.html', { waitUntil: 'networkidle0' });
    const pdf = await page.pdf({
        format: 'A4',
        path: '../pdf/norbert_toth_en.pdf',
    });

    await browser.close();
}
