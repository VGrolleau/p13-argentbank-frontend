import { useEffect } from "react";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import { dataFeatures } from "../data/data";
import '../utils/style/App.css';

function Home() {
    useEffect(() => { document.title = "Argent Bank - Accueil" });
    return (
        <div className="App">
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

export default Home;