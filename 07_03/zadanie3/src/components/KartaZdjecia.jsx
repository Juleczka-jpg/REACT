function KartaZdjecia({ tytul, src, alt, liczbaPolubien }) {
  return (
    <article className="karta-zdjecia">
      <img src={src} alt={alt} />
      <div className="karta-zdjecia_opis">
        <h2>{tytul}</h2>
        <p>{liczbaPolubien} polubień</p>
        {liczbaPolubien > 100 && <p>Popularne</p>}
      </div>
    </article>
  )
}

export default KartaZdjecia