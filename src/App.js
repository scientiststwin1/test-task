import './App.css';
import { Routes, Route } from 'react-router-dom'

import About from './pages/about'
import Home from './pages/home';
import Contact from './pages/contact';
import Work from './pages/work';

function App() {
  return (
      <Routes>

        <Route path='/' element={<Home />}  />

        <Route path='/about' element={<About />} />

        <Route path='/contact' element={<Contact />} />
          
        <Route path='/work' element={<Work />} />
      
      </Routes>      
  );
}

export default App;
