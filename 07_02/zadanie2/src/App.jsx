import './App.css'
import KartaFilmu from './components/KartaFilmu/KartaFilmu.jsx';

function App() {

  return (
    <>
      <div className="App">
        <h1>Filmweb</h1>

      <div className="produkty">
        <KartaFilmu
          title="Tytuł filmu"
          rezyser="Reżyser"
          ocena={8.5}
          czyPolecany={true}
        />

        <KartaFilmu
          title="Inny film"
          rezyser="Inny reżyser"
          ocena={7.5}
          czyPolecany={false}
        />

        <KartaFilmu
          title="Jeszcze inny film"
          rezyser="Jeszcze inny reżyser"
          ocena={2}
          czyPolecany={false}
        />
      </div>
      </div>
    </>
  )
}

export default App
