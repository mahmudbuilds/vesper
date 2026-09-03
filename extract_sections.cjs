const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\akina\\.gemini\\antigravity\\brain\\96319327-6d84-4588-b87f-06c888229975\\.system_generated\\steps\\4\\content.md', 'utf8');

const s1 = content.indexOf('tablet-notes');
if (s1 !== -1) {
  console.log('DESKTOP NOTES IMAGE:');
  console.log(content.slice(s1, s1 + 1000));
}
