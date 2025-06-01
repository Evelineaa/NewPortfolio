import './Header.css';


function App() {
  return (
    <div className='mainSite'>
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
                <button className='meetMeButton'>Meet me</button>
                <button className='projectsButton'>Projects</button>
                <button className='contactButton'>Contact</button>
              </div>
              </HBox>
          </HBox>
          <div className='underLine'></div>
        </div>
      </header>
    </div>
  );
}

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

export default App;
