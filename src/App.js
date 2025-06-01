import './App.css';
import Header from './Components/MainHeader.js';
import { useLocation } from "react-router-dom";
import planeIcon from './Pictures/WhitePlaneIcon.png';
import { useEffect, useState } from 'react';

function App() {

  const [planeTop, setPlaneTop] = useState('400px');
  const [rotated, setRotated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
    const valenciaPage = document.querySelector('.ValenciaImage');
    const whitePage = document.querySelector('.whitePage');
    const budapestPage = document.querySelector('.budapestPage');

    if (budapestPage) {
      const budapestPageTop = budapestPage.getBoundingClientRect().top;
      if (budapestPageTop < window.innerHeight) {
        setPlaneTop('650px');

        setTimeout(() => {
          setRotated(true)
        }, 3000);

        return;
      }
    }

    if (whitePage) {
      const whitePageTop = whitePage.getBoundingClientRect().top;
      if (whitePageTop < window.innerHeight * 0.6) {
        setPlaneTop('525px');
        
        return;
      }
    }

    if (valenciaPage) {
      const valenciaPageTop = valenciaPage.getBoundingClientRect().bottom;
      if (valenciaPageTop < window.innerHeight) {
        setPlaneTop('525px');
        return;
      } else {
        setPlaneTop('400px');

        setTimeout(() => {
          setRotated(false)
        }, 3000);
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <div className='mainSite'>
      <div className='ValenciaImage'>
        <Header />
        <img className={`planeIcon ${rotated ? 'rotated' : ''}`} src={planeIcon} style= {{ top: planeTop }}></img>
          <div className="VBoxWhiteDots">
          <div className='whiteDot'></div>
          <div className='whiteDot'></div>
          <div className='whiteDot'></div>
          </div>
      </div>
      <div className='whitePage'>

      </div>
      <div className='budapestPage'>

      </div>
    </div>
  );
}

const NavBar = () => {
  const location = useLocation();

  const scrollToWhitePage = () => {
    const element = document.getElementById("whitePage");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // spelling fixed: behaviour ➝ behavior
    }
  };

  return (
    <nav>
      <button onClick={scrollToWhitePage}></button>
      <p>Current path: {location.pathname}</p>
    </nav>
  );
};

export default App;
