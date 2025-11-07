import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GetYourTicket from './GetYourTicket';
import MeetMe from './MeetMe';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectsMenu from './ProjectsMenu';
import NetherlandsProject from './NetherlandsProject.js';
import Spain from './Spain.js'
import ScrollToTop from './Components/ScrollToTop.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Projects" element={<ProjectsMenu />} />
        <Route path="/GetYourTicket" element={<GetYourTicket />} />
        <Route path="/MeetMe" element={<MeetMe />} />
        <Route path="/Projects/ProjectsMenu/NetherlandsProject" element={<NetherlandsProject />} />
        <Route path="/Projects/ProjectsMenu/Spain" element={<Spain />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
