import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Calendar from './pages/Calendar';
import Registration from './pages/Registration';
import Officer from './pages/Officer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='calendar' element={<Calendar />} />
        <Route path='registration' element={<Registration />} />
        <Route
            path='about/:officerId'
            element={<Officer />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
