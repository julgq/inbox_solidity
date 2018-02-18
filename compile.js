/* Bad practices:
require('./contracts/Inbox.sol');  // bad!!
*/

const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

// Exportar solo el contrato Inbox.sol
// console.log(solc.compile(source, 1));
module.exports = solc.compile(source, 1).contracts[':Inbox'];


