function obliczSrednia(oceny: number[]): number {
    let suma: number = 0;
    for (const ocena of oceny) {
        suma = suma + ocena;
    }
    return suma / oceny.length;
}

const oceny: number[] = [5, 4, 3, 5];
const srednia: number = obliczSrednia(oceny);

console.log(`Średnia ocen wynosi: ${srednia}`);
export {};