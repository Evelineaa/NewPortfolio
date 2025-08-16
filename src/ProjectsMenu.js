import './Projects.css';
import MainHeader from './Components/MainHeader';
import Buildings from './Pictures/BuildingsDeniaSVG.svg'
import { useNavigate } from 'react-router-dom';

function ProjectsMenu() {
  const navigate = useNavigate();

    return (
        <div className='sectionMenu'>
              <MainHeader theme='dark'></MainHeader>
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Beiruti:wght@200..900&display=swap"></link>
              <div className='temporaryInfo'>
              <p>
                This section of the portfolio is under construction and will be published soon.<br /> 
                While waiting you can look up this one project I've done in Netherlands.<br /> <br />  Thank you for your patience! 
              </p>
              <div className='temporaryButton'>
              <button onClick={() => navigate('/Projects/ProjectsMenu/NetherlandsProject')}>Joffer Project</button>
              </div>
              </div>
  </div>
    );
};

export default ProjectsMenu;
