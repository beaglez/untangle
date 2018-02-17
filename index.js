const debug = require('debug')('index');
const untangle = require('./lib/untangle');

let input;
try {
  debug('parse input as JSON');
  input = JSON.parse(process.argv[2])
} catch (e) {
  debug('error parsing JSON');
  debug(e);
}

try {
  debug('untangle array');
  console.log(untangle(input));
} catch (e) {
  debug('error untangling array');
  debug(e);
  console.error(e.message);
}
