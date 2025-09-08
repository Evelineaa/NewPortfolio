import './MeetMe.css';
import FirstPhoto from './Pictures/MeetMeOne.jpg'
import MainHeader from './Components/MainHeader';
import ValenciaBuildings from './Pictures/ValenciaBuildings.png'
import Castle from './Pictures/BudapestCastle.png'
import Turtle from './Pictures/BudapestTurtle.png'
import Coffee from './Pictures/TallinCoffee.png'
import Tram from './Pictures/BudapestTram.png'
import Tabarca from './Pictures/Tabarca.png'
import ShoppingCenter from './Pictures/StuttgartShoppingCenter.png'
import Church from './Pictures/EindhovenChurch.png'


function MeetMe() {

    return (
        <div>
            <div className='firstMeetMe'>
                    <MainHeader theme="dark" />
                <div className='backgroundWhite'>
                    <img src={FirstPhoto}></img>
                    <div className='aboutMeText'>
                        <p>Hi! I’m Milla and I'm information and communication technology, engineer with a focus on software development. I see this portfolio as more than just a collection of projects. It reflects my growth, adaptability, and curiosity both in tech and in life.</p>
                        <p>I’ve had the opportunity to travel to eight different countries. Travelling has not only taught me adaptability, but also strengthened my communication skills whether adapting to new cultures or working in security, where clear communication was essential. I bring that same mindset into tech: solving problems, staying organized despite problems, and connecting with people.</p>
                        <p>I’ve worked with Android development (Java/Kotlin) and Microsoft Power Platform, from building apps to automating processes. Alongside my studies, I’ve gained skills in  quickly picking up new technologies, user-centered design, and problem-solving in fast-changing environments.</p>
                        <p>Think this portfolio more like a little holiday escape: casual, colorful, and built around the personality and travel stories that make me who I am. I hope you enjoy exploring it as much as I enjoyed creating it. All photos you see here are taken by me or my friends with me, adding a personal touch to the journey.</p>
                        <p>Thank you for taking the time to be here. I’m excited for where this journey might take us next.</p>
                    </div>
                </div>
                <div className='yearImages'>
                    <div className='imageBox'>
                        <img src={ValenciaBuildings} />
                        <span className='year'>2018</span>
                        <span className='yearText'>I graduated from comprehensive school (Music class). <br/> Worked in customer service  on the summer</span>
                    </div>
                    <div className='imageBox'>
                        <img src={Castle} />
                        <span className='year'>2019</span>
                        <span className='yearText'>Worked in Customer service on the summer. <br/> Participated in Ireland to Erasmus+ Youth in Action (More info on the project section)</span>
                    </div>
                    <div className='imageBox'>
                        <img src={Turtle} />
                        <span className='year'>2020</span>
                        <span className='yearText'>I graduated from vocational high school (Security field).<br/>I started working as a district security guard </span>
                    </div>
                    <div className='imageBox'>
                        <img src={Coffee} />
                        <span className='year'>2021</span>
                        <span className='yearText'>I completed matriculation examination<br/> I worked as a security guard and as a firefighter trainee in factory area </span>
                    </div>
                    <div className='imageBox'>
                        <img src={Tram} />
                        <span className='year'>2022</span>
                        <span className='yearText'>I started my studies on ICT<br/> Worked as a security guard and as a firefighter trainee in factory area</span>
                    </div>
                    <div className='imageBox'>
                        <img src={Tabarca} />
                        <span className='year'>2023</span>
                        <span className='yearText'>Started working as a service coordinator at OP Osuuskunta through Tribedo Oy <br/> <br/>Onboarding and managing it was part of my daily responsibilities.</span>
                    </div>
                    <div className='imageBox'>
                        <img src={ShoppingCenter} />
                        <span className='year'>2024</span>
                        <span className='yearText'>Started working as a Developer trainee (Android development) at OP Financial Group <br/>Later I did my thesis with Power Platform and gained valuable experience on project management (More info on the project section)<br/><br/> Both of these career opportunities I also gained valuable experience of onboarding and training new employee</span>
                    </div>
                    <div className='imageBox'>
                        <img src={Church} />
                        <span className='year'>2025</span>
                        <span className='yearText'>left everything behind for 6 months and moved to Valencia, Spain <br/>for exchange studies in Universitat Politécnica de Valéncia(UPV) (More info on the project section)</span>
                    </div>
                </div>
            </div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Beiruti:wght@200..900&display=swap"></link>
        </div>
    );
};



export default MeetMe;