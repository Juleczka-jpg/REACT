"use strict";
function obliczSrednia(oceny) {
    let suma = 0;
    for (const ocena of oceny) {
        suma = suma + ocena;
    }
    return suma / oceny.length;
}
const oceny = [5, 4, 3, 5];
const srednia = obliczSrednia(oceny);
console.log(`Średnia ocen wynosi: ${srednia}`);
