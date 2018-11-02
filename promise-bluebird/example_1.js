const PromiseBluebird = require('bluebird');

setImmediate(() => console.log('setImmediate'));

PromiseBluebird.resolve().then(() => console.log('bluebird promise'));

Promise.resolve().then(() => console.log('native promise'));
