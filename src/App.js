import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
