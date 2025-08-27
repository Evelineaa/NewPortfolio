import './MeetMe.css';
import MenuImage from './Pictures/Menu.png'
import FirstPhoto from './Pictures/MeetMeOne.jpg'
import ButtonOne from './Pictures/NorthernIreland.png'
import ButtonTwo from './Pictures/Tallin.png'
import ButtonThree from './Pictures/budapestOne.png'
import ButtonFour from './Pictures/budapestTwo.png'
import ButtonFive from './Pictures/ValenciaFallas.png'
import { useState } from 'react';
import MainHeader from './Components/MainHeader';
import { useRef } from 'react';
import LetterOne from './Pictures/LetterOne.png'
import LetterTwo from './Pictures/LetterTwo.png'



function MeetMe() {
const [hovered, setHovered] = useState(false);
const timeoutRef = useRef(null)

const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
        setHovered(false);
    }, 3500);
}

    return (
        <div>
            <div className='firstMeetMe'>
                        <div onMouseEnter={() => {setHovered(true)}} onMouseLeave={handleMouseLeave}>
                    <div className='menuBox'>
                        <button>
                        <img src={MenuImage}></img>
                        </button>
                    </div>
                      <MainHeader visible={hovered} hoverOnly={true} theme="dark" />
                      </div>
                     <div className='backgroundWhite'>
                    <img src={FirstPhoto}></img>
                        <div className='aboutMeText'>
                            <p>I’m Milla. I’m currently studying information and communication technology with a focus on software development. I hope this portfolio gives you a sense of who I am not just through my work or studies, but also through the journey behind it.</p>
                            <p>I’ve had the opportunity to travel to eight different countries some more than once and you’ll get a glimpse of those experiences throughout this portfolio.</p>
                            <p>My goal was to make this portfolio feel more like an experience than a presentation, while still keeping my personality at the heart of it.
                                I hope you enjoy exploring it as much as I enjoyed creating it. All photos you will see in this site are taken by me or my friends </p>
                            <p>Welcome to the trip with me!</p>
                        </div>
                     </div>
                    <div className='JustifyContent'>
                        <div className='JustifyLeft'>
                            <div className='buttonWithText'>
                            <button className='northernIrelandImage'>
                            <img src={ButtonOne}/>
                            </button>
                             <div className="hoverTextRight">
                                <span className="boldText">2018 <br /></span>
                                <span>Graduated from comprehensive school (Music class). <br /> Worked in Customer service on the summer</span>                    
                            </div>
                        </div>
                        </div>
                        <div className='justifyLetters'> 
                            <div className='connectObjects'>
                            <button className='letterButtonOne'>
                                <img src={LetterOne}/>
                            </button>
                            <div className="hoverTextLetters">
                                <span className="boldText">2019<br /></span>
                                <span>Worked in Customer service  on the summer<br /> Participated in Ireland to Erasmus+ Youth in Action </span>                    
                            </div>
                            </div>
                        </div>
                        <div className='JustifyRight'>
                        <div className='buttonWithText'>
                            <div className="hoverTextLeft">
                                <span className="boldText">2020<br /></span>
                                <span>Graduated from vocational high school (Security field)<br /> Started working as a security guard<br /></span>
                                <br />
                                <span className="boldText">2021<br /></span>
                                <span>Graduated as a matriculant Examination<br /> Worked as a security guard and as a firefighter trainee </span>                                       
                            </div>
                            <button className='tallinnImage'>
                            <img src={ButtonTwo}/>
                        </button>
                        </div>
                        </div>
                        <div className='JustifyLeft'>
                        <div className='buttonWithText'>
                        <button className='BudapestOneImage'>
                            <img src={ButtonThree}/>
                        </button>
                        <div className="hoverTextRight">
                                <span className="boldText">2022<br /></span>
                                <span>Started my studies on ICT<br />Worked as a security guard and as a firefighter trainee <br /></span>
                            </div>
                        </div>
                        </div>
                         <div className='justifyLetters'> 
                            <div className='connectObjects'>
                            <button className='letterButtonTwo'>
                                <img src={LetterTwo}/>
                            </button>
                            <div className="hoverTextLettersTwo">
                                <span className="boldText">2023 <br /></span>
                                <span>Started working as a service coordinator at OP Osuuskunta<br />through Tribedo Oy</span>                    
                            </div>
                        </div>
                        </div>
                        <div className='JustifyRight'>
                         <div className='buttonWithText'>
                             <div className="hoverTextLeft">
                                <span className="boldText">2024<br /></span>
                                <span>I Started working as a Developer trainee (Android development) <br />at OP Financial Group<br/><br /> Later I did my thesis with Power Platform and gained valuable experience <br />on project management<br/> <br />
                                Both of these career opportunities I also gained valuable experience <br /> of onboarding and training new employee</span>
                            </div>
                        <button className='BudapestTwoImage'>
                            <img src={ButtonFour}/>
                        </button>
                        </div>
                        </div>
                        <div className='JustifyLeft'>
                        <div className='buttonWithText'>
                        <button className='ValenciaImage'>
                            <img src={ButtonFive}/>
                        </button>
                         <div className="hoverTextRight">
                                <span className="boldText">2025<br /></span>
                                <span>left everything behind for 6 months and moved to Valencia, Spain for exchange studies in Universitat Politécnica de Valéncia(UPV)</span>
                            </div>
                        </div>
                        </div>
            </div>
            </div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Beiruti:wght@200..900&display=swap"></link>
        </div>
    );
};



export default MeetMe;