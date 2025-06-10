
let counter1 = 0;
let counter2 = 0;

const Fibonacci = function (n) {

    counter1++;

    if (n === 0)
        return 0;

    if (n === 1)
        return 1;

    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

/**
 * 
 * @param {number} n 
 * @param {Array} arr 
 */
const FibonacciArray = function (n, arr = []) {

    counter2++;

    if (n < arr.length) return;

    if (n === 0) {
        arr.push(0);
        return arr;
    };
    if (n === 1) {
        FibonacciArray(0, arr);
        arr.push(1);
        return arr;
    };

    FibonacciArray(n - 1, arr);

    const val = arr[n - 1] + arr[n - 2];
    arr.push(val);

    return arr;
}


const GetCounterData = function(){

    return {counter1, counter2};
}


export { Fibonacci, FibonacciArray, GetCounterData };