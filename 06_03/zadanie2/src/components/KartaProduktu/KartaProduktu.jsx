import React from 'react';
import styles from './KartaProduktu.module.css';

const KartaProduktu = ({
  nazwa,
  cena,
  czyDostepny,
}) => {
  const cenaZVatem = cena * 1.23;

  return (
    <div className={styles.karta}>
      <h3 className={styles.nazwa}>{nazwa}</h3>
      <p className={styles.cena}>{cena} zł</p>
      <p className={styles.vat}>
        Cena z VAT: {cenaZVatem.toFixed(2)} zł
      </p>
      <p className={styles.dostepnosc}>
        {czyDostepny ? 'Dostępny' : 'Niedostępny'}
      </p>
    </div>
  );
};
export default KartaProduktu;