var async = require('async');

async.waterfall([
    function (callback) {
        console.log('waterfall 1');
        setTimeout(function () {
            console.log('waterfall 1 done.');
            callback(null, 1);
        }, 500);
    },
    function (arg, callback) {
        console.log('waterfall 2');
        setTimeout(function () {
            console.log('waterfall 2 done.');
            callback(null, arg + 1);
        }, 300);
    },
    function (arg, callback) {
        console.log('waterfall 3');
        setTimeout(function () {
            console.log('waterfall 3 done.');
            callback(null, arg + 1);
        }, 100);
    }
], function (err) {
    if (err) { throw err; }
    console.log('waterfall all done.');
});