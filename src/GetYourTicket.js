import './GetYourTicket.css';
import Header from './Components/MainHeader.js';
import PlaneTicket from './Pictures/PlaneTicket.png'


function GetYourTicket() {


    return (
        <section className='airportSplit'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Beiruti:wght@200..900&display=swap"></link>
                <Header />
                <div className='textAndImageButton'>
                    <p>Time to head to the gate and take off</p>
                    <p>Make yourself comfortable and enjoy your first class seat</p>
                    <button onClick={() => window.location.href = 'MeetMe'}>
                        <img src={PlaneTicket}></img>
                    </button>
                </div>
            </section>
    );
};


export default GetYourTicket;