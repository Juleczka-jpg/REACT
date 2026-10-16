import styles from './KartaFilmu.module.css'

function KartaFilmu({ 
    tytul, 
    rezyser, 
    ocena, 
    czyPolecany,
}) {

  return (
    <div className={styles.karta}>
      <h2 className={styles.tytul}>{tytul}</h2>
      <p className={styles.rezyser}>Reżyser: {rezyser}</p>
      <p className={styles.ocena}>Ocena: {ocena}</p>
      {czyPolecany && <p className={styles.czyPolecany}>Film polecany</p>}
    </div>
  )
}
export default KartaFilmu
