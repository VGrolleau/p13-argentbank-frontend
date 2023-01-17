import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';
import User from './User';
import Error from './Error';
import Footer from '../components/Footer';
import Home from './Home';
// import Nav from './components/Nav';

function App() {
  useEffect(() => { document.title = "Argent Bank - Accueil" });
  return (
    <>
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/profile/:userToken" element={<User />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
