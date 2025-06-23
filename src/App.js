import './App.css';
import Header from './Components/MainHeader.js';
import { useLocation } from "react-router-dom";
import planeIcon from './Pictures/WhitePlaneIcon.png';
import React, { useEffect, useState, useRef } from 'react';
import ProfileImage from './Pictures/ProfileImage.JPG';


function App() {

  const [planeTop, setPlaneTop] = useState('400px');
  const [rotated, setRotated] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;


    const handleScroll = () => {
      const valenciaPage = document.querySelector('.ValenciaImage');
      const deniaPage = document.querySelector('.deniaPage');
      const budapestPage = document.querySelector('.budapestPage');

      if (budapestPage) {
          setPlaneTop('650px');
          return;
        }

      if (deniaPage) {
        setPlaneTop('525px');

        return;
      }

      if (valenciaPage) {
      const valenciaPageBottom = valenciaPage.getBoundingClientRect().bottom - container.getBoundingClientRect().top;
        if (valenciaPageBottom < window.innerHeight) {
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
    <div className='mainSite'  ref={containerRef}>
      <section className='ValenciaImage'>
        <Header />
        <img className={`planeIcon ${rotated ? 'rotated' : ''}`} src={planeIcon} style={{ top: planeTop }}></img>
        <div className="VBoxWhiteDots">
          <div className='whiteDot'></div>
          <div className='whiteDot'></div>
          <div className='whiteDot'></div>
        </div>
      </section>
      <section className='deniaPage'>
        <div className='imageAddition'>
          <img className='imageProfile' src={ProfileImage}></img>
          <div className='textAddition'>
            <p> I’m Milla. I’m currently studying information and communication Technology with a focus on software development. I hope this portfolio gives you a sense of who I am not just through my work or studies, but also through the journey behind it</p>
            <p>I’ve had the opportunity to travel to eight different countries some more than once and you’ll get a glimpse of those experiences throughout this portfolio.</p>
            <p>My goal was to make this portfolio feel more like an experience than a presentation, while still keeping my personality at the heart of it. I hope you enjoy exploring it as much as I enjoyed creating it.</p>
            <p>Welcome to the trip with me!</p>
          </div>
        </div>
        <div className='linearTopGradient'></div>
        <div className='linearBottomGradient'></div>
      </section>
      <section className='budapestPage'>
      </section>
    </div>
  );
}

const NavBar = () => {
  const location = useLocation();

  const scrollToDeniaPage = () => {
    const element = document.getElementById("deniaPage");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // spelling fixed: behaviour ➝ behavior
    }
  };

  return (
    <nav>
      <button onClick={scrollToDeniaPage}></button>
      <p>Current path: {location.pathname}</p>
    </nav>
  );
};

export default App;
