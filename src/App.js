import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Main from './pages/Main';
import CryptoView from './pages/CryptoView';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Main/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/cryptoView' element={<CryptoView/>}></Route>

        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;
