const PromiseBluebird = require('bluebird');

setImmediate(() => console.log('setImmediate 1'));

PromiseBluebird.resolve().then(() => console.log('bluebird promise'));

Promise.resolve().then(() => console.log('native promise'));

setImmediate(() => console.log('setImmediate 2'));

PromiseBluebird.resolve().then(() => console.log('bluebird promise 2'));
