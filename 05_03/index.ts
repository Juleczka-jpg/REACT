interface Zamowienie {
    id: number;
    klient: string;
    kwota: number;
    uwagi?: string;
}

type StatusZamowienia = "nowe" | "opłacone" | "wysłane";

const zamowienia: Zamowienie[] = [
    { id: 1, klient: "Anna", kwota: 120, uwagi: "Dostawa po 16:00" },
    { id: 2, klient: "Jan", kwota: 85 }
];

const sumaZamowien = (lista: Zamowienie[]): number =>
    lista.reduce((suma, zamowienie) => suma + zamowienie.kwota, 0);

console.log(sumaZamowien(zamowienia));
export{};