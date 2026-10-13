import './App.css'
import KartaProduktu from './components/KartaProduktu/KartaProduktu';

function App() {
  return (
    <div className="app">
      <h1>Sklep Internetowy</h1>
      <div className="produkty">

        <KartaProduktu
          nazwa="Laptop"
          cena={3499}
          czyDostepny={true}
        />

        <KartaProduktu
          nazwa="Smartfon"
          cena={1999}
          czyDostepny={false}
        />
      </div>
    </div>
  );
}
export default App
