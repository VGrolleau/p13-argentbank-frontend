import { useEffect } from 'react';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import '../utils/style/App.css';

function App() {
  useEffect(() => { document.title = "Argent Bank - Accueil" })
  return (
    <div className="App">
      <Nav isSignIn={false} />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
