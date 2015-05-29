# rgu

set argument type requirements and defaults

read: 'argue'. 

## What

rgu allows you to define the types of arguments you expect in a function, assign them correctly, and default them if they are missing.

rgu is a thought experiment and probably shouldn't be used in production.

## Usage

```
function x(a,b,c){
    var result = rgu(this, arguments, [
        ['string', 'bar'], // expect a string, default to 'bar'
        ['number', 0], // expect a number, default to 0
        'function' // expect a function, default to undefined
    ]);

    if(result) return result(); // If rgu was required to fix the arguments, return its result.

    a -> 'foo'
    b -> 0
    c -> {baz:'bazinga'}

    return 'majigger';
}

x('foo', {baz:'bazinga'}) -> 'majigger'
```