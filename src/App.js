import './App.css';
import Header from './Components/MainHeader.js';


function App() {


  return (
    <section className='airportSplit'>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Beiruti:wght@200..900&display=swap"></link>
      <Header />
      <div className='textAndButton'>
        <p>LET’S GET YOU A FREE TICKET FOR YOUR NEXT JOURNEY</p>
        <button onClick={() => window.location.href = 'GetYourTicket'}></button>
      </div>
    </section>
  );
};



export default App;
