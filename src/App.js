import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Calendar from './pages/Calendar';
import Entry from './pages/Entry';
import Officer from './pages/Officer';
import Item from './pages/Item';
import Cart from './pages/Cart'
import Confirmation from './features/shop/Confirmation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='calendar' element={<Calendar />} />
        <Route path='entry' element={<Entry />} />
        <Route path='cart' element={<Cart />} />
        <Route path='confirm' element={<Confirmation />} />
        <Route
          path='about/:officerId'
          element={<Officer />}
        />
        <Route
          path='entry/:itemId'
          element={<Item />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
