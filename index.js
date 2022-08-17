function receivesAFunction(callback) {
    console.log(callback());
}
receivesAFunction(function () { return "whatever you want" });

const returnsANamedFunction = () => {
    let fn = function () {

    }
    return fn
}

const returnsAnAnonymousFunction = () => {
    return function () { 

    }
}