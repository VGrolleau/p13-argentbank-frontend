import { useEffect } from 'react';
import Feature from '../components/Feature';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import '../utils/style/App.css';
import { dataFeatures } from '../data/data';

function App() {
  useEffect(() => { document.title = "Argent Bank - Accueil" });
  return (
    <div className="App">
      <Nav isLogged={false} />
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>

        {dataFeatures.map(dataFeature =>
          <Feature icon={dataFeature.iconURL} altImg={dataFeature.altImg} textH3={dataFeature.textH3} textP={dataFeature.textP} key={dataFeature.id} />
        )}
      </section>
    </div>
  );
}

export default App;
