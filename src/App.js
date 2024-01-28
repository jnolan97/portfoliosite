import './styles/style.css';
import AboutMe from './components/AboutMe';
import Resumepdf from './assets/Resumepdf.pdf'

function App() {
  return (
    <>
    <div className='header'>
    <h1>Jack's Portfolio Website</h1>
    <h3>Welcome to my developer page</h3>
    <span className='header-links'>
    <a href={Resumepdf} download='Resume2024'>Download my Resume</a>
    &nbsp; | &nbsp;
    <a href='https://www.linkedin.com/in/john-nolan-04062b1a8' target='_blank'>LinkedIn</a>
    </span>

  </div>
    <AboutMe />
    </>
  );
}

export default App;
