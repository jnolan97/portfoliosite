import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './styles/style.css';

function App() {
  return (
    <div class='main-image'>
        <div class='overlay'>
          <h2 className='TitleText'>
            Jack's Portfolio Website
            <br />
            </h2>
          <p></p>
          <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
