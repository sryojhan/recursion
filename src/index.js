import "./styles.css"

import { FibonacciArray } from "./scripts/fibonacci"


const n = 15;
const fibonacciData = FibonacciArray(n);


const direction = (function () {

    let dir = 3;
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


let lastContainer = null;
let currentFibonacciElement = 0;

const mainElement = document.querySelector('.main-fib-container');

const CreateNewFibonacciElement = function () {

    if (++currentFibonacciElement === 1) {

        lastContainer = CreateContainer(currentFibonacciElement, null);
    }
    else {
        lastContainer = CreateContainer(fibonacciData[currentFibonacciElement], lastContainer);
    }

    mainElement.append(lastContainer);
}



const BuildFibonacciBoard = function (n) {


    console.log(fibonacciData);

    fibonacciData.forEach((value, idx) => {

        if (idx === 0) return;
        if (idx === 1) {

            lastContainer = CreateContainer(value, null);
            return;
        }

        lastContainer = CreateContainer(value, lastContainer);
    });


    document.querySelector('.main-fib-container').append(lastContainer);
}


//BuildFibonacciBoard();


window.addEventListener('click', () => {

    CreateNewFibonacciElement();
})