const PromiseBluebird = require('bluebird');

PromiseBluebird.setScheduler(process.nextTick);

PromiseBluebird.setScheduler((cb) => setTimeout(cb, 0));
