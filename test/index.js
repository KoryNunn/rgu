var rgu = require('../'),
    test = require('tape');

test('whatevs', function(t){
    t.plan(4);

    var fn = function(){};

    function x(a,b,c){
        var result = rgu(this, arguments, [
            ['string', 'bar'],
            ['number', 0],
            'function'
        ]);

        if(result) return result();

        t.equal(a, 'foo', 'passed in a');
        t.equal(b, 0, 'defaulted 0');
        t.equal(c, fn, 'passed in c');

        return 'majigger';
    }

    var result = x('foo', fn);

    t.equal(result, 'majigger', 'correct result');
});