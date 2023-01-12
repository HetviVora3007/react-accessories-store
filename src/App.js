import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import ShopAll from './Pages/ShopAll/ShopAll';
import OurStory from './Pages/OurStory/OurStory';
import OurCraft from './Pages/OurCraft/OurCraft';
import Contact from './Pages/Contact/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shopall' element={<ShopAll />} />
          <Route path='/ourstory' element={<OurStory />} />
          <Route path='/ourcraft' element={<OurCraft />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
