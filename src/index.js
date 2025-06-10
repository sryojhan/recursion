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

    const Reset = function() {

        dir = 3;
    }

    return { Get, Reset};
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

    if(currentFibonacciElement === fibonacciData.length - 1){

        mainElement.innerHTML = "";
        currentFibonacciElement = 0;
        lastContainer = null;
        direction.Reset();
        mainElement.classList.add('even');
        return;
    }

    if (++currentFibonacciElement === 1) {

        console.log(currentFibonacciElement);

        lastContainer = CreateContainer(currentFibonacciElement, null);
    }
    else {
        lastContainer = CreateContainer(fibonacciData[currentFibonacciElement], lastContainer);
    }

    mainElement.append(lastContainer);
    mainElement.classList.toggle('even');
}



//BuildFibonacciBoard();


window.addEventListener('click', () => {

    CreateNewFibonacciElement();
})



window.addEventListener('touch', () => {

    CreateNewFibonacciElement();
})