import './Projects.css';
import MainHeader from './Components/MainHeader';
import { useNavigate } from 'react-router-dom';
import EmptySpain from './Pictures/EmptySpanishMap.png'
import EmptyNetherlands from './Pictures/EmptyNetherlandsMap.png'
import EmptyNorthernIreland from './Pictures/EmptyNorthernIrelandMap.png'
import EmptyFinland from './Pictures/EmptyFinlandMap.png'
import NorthernIrelandMap from './Pictures/NorthernIrelandMap.png'
import Netherlands from './Pictures/NetherlandsMap.png'
import Spain from './Pictures/SpanishMap.png'
import Finland from './Pictures/FinlandMap.png'

function ProjectsMenu() {
  const navigate = useNavigate();

  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Beiruti:wght@200..900&display=swap"></link>
        <div className='sectionMenu'>
          <MainHeader theme='dark'></MainHeader>
          <div >
            <div className='mapButtons'>
              <button className='spain' onClick={() => navigate('/Projects/ProjectsMenu/Spain')}>
                <div className='mapTextsLeft'>
                  <h1>Spain 2025</h1>
                  <h2>Exchange and studies</h2>
                  <h2>Under construction</h2>
                </div>
                <img className="EmptySpain" src={EmptySpain} />
                <img className="NotEmptySpain" src={Spain} />
              </button>
            </div>
            <div className='greyLine'></div>
            <div className='mapButtons'>
              <button className='Netherlands' onClick={() => navigate('/Projects/ProjectsMenu/NetherlandsProject')}>
                <img className="EmptyNetherlands" src={EmptyNetherlands} />
                <img className="NotEmptyNetherlands" src={Netherlands} />
                <div className='mapTextsRight'>
                  <h1>Netherlands 2024</h1>
                  <h2>Joffer mobile app</h2>
                </div>
              </button>
            </div>
            <div className='greyLine'></div>
            <div className='mapButtons'>
              <button className='NorthernIreland'>
                <div className='mapTextsLeft'>
                  <h1>Northern Ireland</h1>
                  <h2>Erasmus+ Youth in Action</h2>
                  <h2>Under construction</h2>
                </div>
                <img className="EmptyNorthernIreland" src={EmptyNorthernIreland} />
                <img className="NotEmptyNorthernIreland" src={NorthernIrelandMap}/>
              </button>
            </div>
            <div className='greyLine'></div>
            <div className='mapButtons'>
              <button className='Finland'>
                <img className="EmptyFinland" src={EmptyFinland} />
                <img className="NotEmptyFinland" src={Finland} />
                <div className='mapTextsRight'>
                  <h1>Finland</h1>
                  <h2>Many different projects</h2>
                  <h2>Under construction</h2>
                </div>
              </button>
            </div>
            <div className='greyLine'></div>
          </div>
        </div>
    </div>
  );
};

export default ProjectsMenu;
