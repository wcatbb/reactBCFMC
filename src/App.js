import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Calendar from './pages/Calendar';
import Entry from './pages/Entry';
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
      </Routes>
    </div>
  );
}

export default App;
