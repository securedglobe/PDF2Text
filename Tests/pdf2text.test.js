const fs = require('fs');
const path = require('path');

function fail(msg) {
  console.error('FAIL ' + msg);
  process.exit(1);
}

const src = fs.readFileSync(path.join(__dirname, '..', 'README.md'), 'utf8');
if (!src.includes('# SG_PDF2Text')) fail('title');
if (!src.includes('xpdf')) fail('xpdf');
if (!src.includes('SG_PDF2TXT.exe')) fail('exe');
console.log('OK Pdf2TextTests');
