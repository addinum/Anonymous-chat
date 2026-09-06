const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const server = read('server.js');
const db = read('db.js');
const client = read('public/script.js');
const html = read('public/index.html');

const serverDbCalls = new Set([...server.matchAll(/db\.([A-Za-z0-9_]+)\s*\(/g)].map(m => m[1]));
const exportedBlock = db.match(/module\.exports\s*=\s*\{([\s\S]*?)\};/);
if (!exportedBlock) throw new Error('db.js has no module.exports block');
const exported = new Set([...exportedBlock[1].matchAll(/\b([A-Za-z0-9_]+)\s*,/g)].map(m => m[1]));
for (const name of serverDbCalls) {
  if (!exported.has(name)) throw new Error(`server.js calls db.${name}(), but db.js does not export it`);
}

const serverCases = new Set([...server.matchAll(/case\s+'([^']+)'/g)].map(m => m[1]));
const clientSends = new Set([...client.matchAll(/sendWs\(\s*'([^']+)'/g)].map(m => m[1]));
for (const type of clientSends) {
  if (!serverCases.has(type)) throw new Error(`client sends '${type}' but server has no matching case`);
}

const ids = new Set([...html.matchAll(/\bid=["']([^"']+)["']/g)].map(m => m[1]));
const requiredIds = [...new Set([...client.matchAll(/getElementById\(["']([^"']+)["']\)/g)].map(m => m[1]))];
const missing = requiredIds.filter(id => !ids.has(id) && !['accountBar','accountBarText','inboxBtn','inboxBadge'].includes(id));
if (missing.length) throw new Error(`client references missing HTML ids: ${missing.join(', ')}`);

console.log('Static contract smoke test passed.');
console.log(`WebSocket message types checked: ${clientSends.size}`);
console.log(`Server DB calls checked: ${serverDbCalls.size}`);
console.log(`HTML element references checked: ${requiredIds.length}`);
