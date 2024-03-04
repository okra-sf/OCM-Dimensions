const fs = require('fs');
var src = process.argv[2];
const page_structure = fs.readFileSync('page-structure2.html', {encoding:'utf8'});
const src_compressed = fs.readFileSync(src, {encoding:'utf8'}).trim()
const page01 = page_structure.replace('SRC_COMPRESSED_STRING', src_compressed);
console.log(page01);
