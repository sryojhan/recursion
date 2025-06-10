import "./styles.css"

import { FibonacciArray } from "./scripts/fibonacci"


let n = 16;
const fibonacciData = FibonacciArray(n);


const direction = (function () {

    let dir = 3;
    const names = ["up", "left", "down", "right"];


    const Get = function () {

        dir = (dir + 1) % 4;
        return names[dir];
    }

    const Reset = function () {

        dir = 3;
    }

    return { Get, Reset };
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

    if (currentFibonacciElement > 35) {

        currentFibonacciElement = 0;
        lastContainer = null;
        mainElement.innerHTML = "";
        mainElement.classList.add('even');

    }
    if (currentFibonacciElement === fibonacciData.length - 1) {



        DuplicateFibonacciSequence();

    }

    if (++currentFibonacciElement === 1) {

        lastContainer = CreateContainer(currentFibonacciElement, null);
    }
    else {
        lastContainer = CreateContainer(fibonacciData[currentFibonacciElement], lastContainer);
    }


    AppendElement();
}


const DuplicateFibonacciSequence = function () {

    n *= 2;
    FibonacciArray(n, fibonacciData);
}



const AppendElement = function () {


    mainElement.append(lastContainer);
    mainElement.classList.toggle('even');

    if (currentFibonacciElement > 10) {

        const firstElem = document.querySelector('.fib-div');
        firstElem.remove();

        if (currentFibonacciElement === 11) {

            const secondElem = document.querySelector('.fib-div');
            secondElem.remove();

        }

    }

}



//BuildFibonacciBoard();


window.addEventListener('click', () => {

    CreateNewFibonacciElement();
})



window.addEventListener('touch', () => {

    CreateNewFibonacciElement();
})
