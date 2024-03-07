/*
* File: script.js
* Author:  Szamosfalvi Szonja
* Copyright: 2024,  Szamosfalvi Szonja
* Group: Szoft I-1-N
* Date: 2024-03-07
* Github: https://github.com/szonia/
* Licenc: GNU GPL
*/

const sideAInput = document.querySelector("#sideA");
const sideBInput = document.querySelector("#sideB");
const sideCInput = document.querySelector("#sideC");
const sideDInput = document.querySelector("#sideD");
const areaInput = document.querySelector("#area");
const calcButton = document.querySelector("#calcButton");

calcButton.addEventListener('click', () => {
    startCalc();
})

function startCalc() {
    let sideA = Number(sideAInput.value)
    let sideB = Number(sideBInput.value)
    let sideC = Number(sideCInput.value)
    let sideD = Number(sideDInput.value)
    let area = calcArea(sideA, sideB, sideC, sideD)
    console.log("Area: ", area)
    areaInput.value = area
    
}

// area = ((s - sideA) * (s - sideB) * (s - sideC) * (s - sideD));

function calcArea(sideA, sideB, sideC, sideD) {
    // félkerület s kiszámitás
    s = (sideA + sideB + sideC + sideD) / 2;
    Math.sqrt((s - sideA) * (s - sideB) * (s - sideC) * (s - sideD));
    return area;
}