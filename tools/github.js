// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');

const file = './tools/index.html';

// Replace by your repo URL
const repoBaseUrl = 'https://github.com/Evyweb/star-wars-app/blob/master/';

let svgContent = fs.readFileSync(file, 'utf8');

svgContent = svgContent.replace(/xlink:href="([^"]+)"/g, (match, filePath) => {
    const githubPath = `${repoBaseUrl}${filePath}`;
    return `xlink:href="${githubPath}"`;
});

fs.writeFileSync(file, svgContent);
console.log('SVG file updated with GitHub links!');