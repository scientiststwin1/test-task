import './App.css';
import { Routes, Route } from 'react-router-dom'

import About from './pages/about'
import Home from './pages/home';
import Contact from './pages/contact';
import Work from './pages/work';

import Footer from './components/organisms/footer';
import Header from './components/organisms/header';

function App() {
  return (
    <>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />} />

        <Route path='/contact' element={<Contact />} />

        <Route path='/work' element={<Work />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
