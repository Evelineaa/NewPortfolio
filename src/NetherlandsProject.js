import './Netherlands.css';
import JofferOne from './Pictures/JofferPicture1.png'
import JofferTwo from './Pictures/JofferPicture2.png'
import JofferThree from './Pictures/JofferPicture3.png'
import Github from './Pictures/GithubLinkToJoffer.png'
import Linkedin from './Pictures/LinkedinLinkToJofferPost.png'
import { useState } from 'react';
import { useRef } from 'react';
import MenuImage from './Pictures/Menu.png'
import MainHeader from './Components/MainHeader';


function NetherlandsProject() {
    const [hovered, setHovered] = useState(false);
    const timeoutRef = useRef(null)
    
    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setHovered(false);
        }, 3500);
    }

    return (
        <div className='backgroundBox'>
            <div onMouseEnter={() => {setHovered(true)}} onMouseLeave={handleMouseLeave}>
                    <div className='menuBox'>
                        <button>
                        <img src={MenuImage}></img>
                        </button>
                    </div>
                      <MainHeader visible={hovered} hoverOnly={true} theme="dark" />
                      </div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Beiruti:wght@200..900&display=swap"></link>
            <div className='sections'>
                <div className='backgroundInfoOne'>
                    <div className='alignText'>
                        <div className='marginsOne'>
                        <h1>JOFFER</h1>
                        <h2> Background info</h2>
                        <p>I participated in a web development project at Oulu University of Applied Sciences, collaborating with students from both Finland and the Netherlands. We had in our team  6 people from Finland and 2 people from Netherland.<br />
                            The project was structured in three phases: we started with a kickoff week in Oulu, Finland, continued remotely during the middle phase, and concluded with a final week in Eindhoven, Netherlands.<br /> <br />
                            Finnish developers were responsible for the front-end, while the Dutch team handled the back-end development. Originally, we were supposed to build only a website called Joffer. However, three of us from the Finnish team had done before project in web development,
                            so we proposed splitting our efforts: three would focus on building the website, while the other three would explore developing a mobile application for Joffer using React Native.</p>
                    </div>
                    </div>
                    <img src={JofferOne} />
                </div>
            </div>
            <div className='sections'>
                <div className='backgroundInfoOne'>
                    <img src={JofferTwo} />
                    <div className='alignText'>
                        <div className='marginsTwo'>
                        <h2> What is Joffer?</h2>
                        <p>Joffer is a mobile app designed for an
                            employers, unemployed and employed people
                            to find a new job and match with recruiters.
                            It’s meant to be low barrier for users to use it from both sites.
                            <br />Imagine it like a dating app. Job seekers swipes right or left job applications and recruiters swipes Job seekers profile. 
                            Depending how matching or good the job seeker is for the job. When both factors are swiped right they will get a match witch gives for recruiter and for job seeker all the contact details. such example: email, phone number...
                        </p>
                        </div>
                    </div>
                </div>
            </div>
             <div className='sections'>
                <div className='backgroundInfoOne'>
                    <div className='alignText'>
                        <div className='marginsOne'>
                        <h2> My part of the project</h2>
                        <p>I was responsible for designing and developing the Joffer mobile application. For two months, I also served as the Scrum Master for the entire team. I created the design using Figma, planning and building the full prototype for the mobile version.
                            <br /> The most challenging part was ensuring that every element closely matched the website:  including colors, layout, and overall structure. This made the design process more complex, as I had to carefully consider which elements were essential for the mobile experience and which could be simplified or left out.
                        <br /> <br /> Of development, I was responsible for implementing the initial user interactions, including the registration and login functionality (including all the background work, such as integrating the front-end code with the back-end.) Below this page is Linkedin link where you can see more about the registering phase of the app. 
                        <br />I also developed the swiping card feature and screen view. (Picture 1.) For the new job offer I did the “Add new job offer” which wasn’t my best work, but it works for the application. (Picture 3)</p>
                    </div>
                    </div>
                    <img src={JofferThree} />
                </div>
            </div>
            <div className='LinkButtons'>
                <button onClick= { () => window.open('https://github.com/Joffer-Project/JofferMobile', '_blank', 'noopener,noreferrer')}>
                    <img src={Github}/>
                </button>
                <button  onClick= { () => window.open('https://www.linkedin.com/posts/millapohjolainen_olemme-pyrkineet-avaamaan-uuden-luvun-ty%C3%B6nhaussa-activity-7191880366515769344-Iq6b?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1j6sYBbYvyPGNwNXFKuUQZfB9lyB1b-C0','_blank', 'noopener,noreferrer')}>
                    <img src={Linkedin}/>
                </button>
            </div>
        </div>
    );
};

export default NetherlandsProject;
