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
                            <p>Hi! I’m Milla and I’m studying Information and Communication Technology with a focus on software development (Graduating first week of September), with a focus on software development. I see this portfolio as more than just a collection of projects. It reflects my growth, adaptability, and curiosity both in tech and in life.</p>
                            <p>I’ve had the opportunity to travel to eight different countries. Travelling has not only taught me adaptability, but also strengthened my communication skills whether adapting to new cultures or working in security, where clear communication was essential. I bring that same mindset into tech: solving problems, staying organized despite problems, and connecting with people.</p>
                            <p>I’ve worked with Android development (Java/Kotlin) and Microsoft Power Platform, from building apps to automating processes. Alongside my studies, I’ve gained skills in  quickly picking up new technologies, user-centered design, and problem-solving in fast-changing environments.</p>
                            <p>My goal was to make this portfolio feel more like an experience than a presentation, while still keeping my personality at the heart of it. I hope you enjoy exploring it as much as I enjoyed creating it. All photos you see here are taken by me or my friends with me, adding a personal touch to the journey.</p>
                            <p>Thank you for taking the time to be here. I’m excited for where this journey might take us next.</p>
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
                                <span>Worked in Customer service  on the summer<br /> Participated in Ireland to Erasmus+ Youth in Action (More info on the project section)</span>                    
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
                                <span>Started working as a service coordinator at OP Osuuskunta<br />through Tribedo Oy<br /><br />
                                Onboarding and managing it was part of my daily responsibilities.</span>                    
                            </div>
                        </div>
                        </div>
                        <div className='JustifyRight'>
                         <div className='buttonWithText'>
                             <div className="hoverTextLeft">
                                <span className="boldText">2024<br /></span>
                                <span>I Started working as a Developer trainee (Android development) <br />at OP Financial Group<br/><br /> Later I did my thesis with Power Platform and gained valuable experience (More info on the project section) on project management<br/> <br />
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