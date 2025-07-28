import './Header.css';
import { useNavigate } from 'react-router-dom';


function MainHeader({ visible = true, hoverOnly = false, theme = 'light' }) {
  const navigate = useNavigate();
  
  
  if (hoverOnly && !visible) return null;

const HBox = ({ children, style }) => {
  return (
    <div style={{ display:'flex', flexDirection: 'row', ...style }}>
      {children}
    </div>
  )
}

const VBox = ({ children, style }) => {
  return (
    <div style={{ display:'flex', flexDirection: 'column', ...style }}>
      {children}
    </div>
  )
}

  return (
    <div className={`mainSite ${theme === 'dark' ? 'darkHeader' : 'lightHeader'}`}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Beiruti:wght@200..900&display=swap"></link>
      <header className='Header'>
        <div className='headerMargin'>
          <HBox>
            <VBox className = 'VBoxMargin'>
              <div className='welcomeTraveller'>
                <h1>Welcome</h1>
                <h2 className='TravellerWelcome'>Traveller</h2>
              </div>
            </VBox>
            <HBox>
              <div className='mainButtons'>
                <button className='meetMeButton'>
                  <span>Meet me</span>
                  </button>
                <button className='projectsButton' onClick={() => navigate('/Projects')}>
                  <span>Projects</span>
                  </button>
                <button className='contactButton'>
                  <span>Contact</span>
                  </button>
              </div>
              </HBox>
          </HBox>
          <div className='underLine'></div>
        </div>
      </header>
    </div>
  );
}

export default MainHeader;
