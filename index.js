// test 1
function callback(result){
    return result;
}

function receivesAFunction(callback){
    callback();
};

// test 2
function returnsANamedFunction (){
    return function sum(num1, num2){
        num1 + num2;
    };
};

// test3
function returnsAnAnonymousFunction(){
    return function(name, age){
        name, age;
    };
};