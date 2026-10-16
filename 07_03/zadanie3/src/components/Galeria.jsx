import KartaZdjecia from './KartaZdjecia'

const zdjecia = [
  {
    id: 1,
    tytul: 'Górski krajobraz',
    src: 'https://picsum.photos/id/1018/640/420',
    alt: 'Góry i jezioro w oddali',
    liczbaPolubien: 128,
  },
  {
    id: 2,
    tytul: 'Leśna ścieżka',
    src: 'https://picsum.photos/id/1015/640/420',
    alt: 'Zielony las',
    liczbaPolubien: 76,
  },
  {
    id: 3,
    tytul: 'Spokojne morze',
    src: 'https://picsum.photos/id/1011/640/420',
    alt: 'Widok na wodę i wybrzeże',
    liczbaPolubien: 204,
  },
  {
    id: 4,
    tytul: 'Górska przygoda',
    src: 'https://picsum.photos/id/1002/640/420',
    alt: 'Pies na tle górskiego krajobrazu',
    liczbaPolubien: 93,
  },
]

function Galeria() {
  return (
    <main className="galeria">
      <h1>Galeria zdjęć</h1>
      <div className="galeria__zdjecia">
        {zdjecia.map((zdjecie) => (
          <KartaZdjecia key={zdjecie.id} {...zdjecie} />
        ))}
      </div>
    </main>
  )
}

export default Galeria