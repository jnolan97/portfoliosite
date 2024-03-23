import './styles/style.css';
import AboutMe from './components/AboutMe';
import Resumepdf from './assets/Resumepdf.pdf';
import { MDBContainer } from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer>
      <div className='header'>
        <h1>Jack Nolan - Software Engineer</h1>
        <h3>Welcome to my portfolio site</h3>
        <span className='header-links'>
          <a href={Resumepdf} download='Resume2024'>
            Download my Resume
          </a>
          &nbsp; | &nbsp;
          <a
            href='https://www.linkedin.com/in/john-nolan-04062b1a8'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn
          </a>
        </span>
      </div>
      <AboutMe />
    </MDBContainer>
  );
}

export default App;
