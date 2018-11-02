
const queue = [];

PromiseBluebird.resolve().then(() => console.log('bluebird promise'));
queue.push(cb1); // cb1 = () => console.log('bluebird promise')

PromiseBluebird.resolve().then(() => console.log('bluebird promise 2'));
queue.push(cb2); // cb2 = () => console.log('bluebird promise 2')

setImmediate(() => { // scheduler
  queue.forEach(cb => { // queue processing
    cb();
  });
});
