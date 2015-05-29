function rgu(context, calleeArgs, rules){
    var callee = calleeArgs.callee,
        fnArgsLength = callee.length;

    if(calleeArgs.length === fnArgsLength){
        return;
    }

    calleeArgs = Array.prototype.slice.call(calleeArgs);

    var offset = 0;
    for(var i = rules.length -1; i>=0 && offset < fnArgsLength; i--){
        var rule = typeof rules[i] === 'object' ? rules[i] : [rules[i]];

        if(rule[0] !== typeof calleeArgs[i - offset]){
            offset++;
            if(offset > i){
                calleeArgs[i] = rule[1];
                break;
            }
            i++;
            continue;
        }

        calleeArgs[i] = calleeArgs[i - offset];
        offset = 0;
    }

    return function(){
        return callee.apply(context, calleeArgs);
    };
}

module.exports = rgu;