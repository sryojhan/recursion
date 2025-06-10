import "./styles.css"

import { FibonacciArray } from "./scripts/fibonacci"


const n = 7;;
const fibonacciData = FibonacciArray(n);


const direction = (function () {

    let dir = 0;
    const names = ["up", "left", "down", "right"];


    const Get = function () {

        dir = (dir + 1) % 4;
        return names[dir];
    }

    return { Get };
})();



/**
 * 
 * @param {number} n 
 */
const CreateElement = function (n) {

    const elem = document.createElement('div');

    elem.textContent = n;
    elem.classList.add('fib-div');
    elem.style.flex = n.toString();

    return elem;
}



const CreateContainer = function (n, previous) {


    const container = document.createElement('div');
    container.classList.add('fib-container');
    container.classList.add(direction.Get());
    container.style.flex = n.toString();

    const elem = CreateElement(n);

    if (previous)
        container.append(previous);
    container.append(elem);

    return container;
}

const BuildFibonacciBoard = function () {

    let lastContainer = null;

    fibonacciData.forEach((value, idx) => {

        if (idx === 0) return;
        if (idx === 1) {

            lastContainer = CreateContainer(value, null);
            return;
        }

        lastContainer = CreateContainer(value, lastContainer);
    });


    document.querySelector('main-fib-container').append(lastContainer);
}
