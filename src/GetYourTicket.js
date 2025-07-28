import './GetYourTicket.css';
import PlaneTicket from './Pictures/PlaneTicket.png'
import MainHeader from './Components/MainHeader.js';

function GetYourTicket() {

    return (
        <section className='airportSplit'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Beiruti:wght@200..900&display=swap"></link>
                <MainHeader theme="light" />
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