import './App.css';
import MainHeader from './Components/MainHeader.js';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();

  return (
    <section className='airportSplit'>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Beiruti:wght@200..900&display=swap"></link>
      <MainHeader theme="light" />
      <div className='textAndButton'>
        <p>LET’S GET YOU A FREE TICKET FOR YOUR NEXT JOURNEY</p>
        <button onClick={() => navigate('/GetYourTicket')}></button>
      </div>
    </section>
  );
};



export default App;
