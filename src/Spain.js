import './Spain.css';
import School from './Pictures/ValenciaProjectSchoolArea.jpg'
import Views from './Pictures/ValenciaViews.jpg'
import ViewsTwo from './Pictures/ValenciaViewsTwo.jpg'
import Linkedin from './Pictures/LinkedinLinkToJofferPost.png'
import MainHeader from './Components/MainHeader';


function NetherlandsProject() {

    return (
        <div className='backgroundBox'>
            <MainHeader theme="dark" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Beiruti:wght@200..900&display=swap"></link>
                <div className='travelPhotos'>
                    <img src={School} />
            </div>
            <div className='spainSections'>
                <div className='backgroundInfoOne'>
                    <div className='alignFont'>
                        <h1>Erasmus exchange</h1>
                        <h3>Valencia spain</h3>
                        <h3>Valencia Polytechnic University</h3>
                        <h2>Why Valencia?</h2>
                        <p> I chose Valencia for my exchange because I wanted a completely new kind of experience.
                            Something different from life in Finland. The city’s location by the sea, warm weather, and relaxed Mediterranean atmosphere immediately caught my attention. I’ve always loved being near the ocean, and the idea of living somewhere where you can go to the beach after classes sounded amazing.
                        </p>
                    </div>
                </div>
            </div>
                <div className='travelPhotos'>
                    <img src={Views} />
            </div>
            <div className='spainSections'>
                <div className='backgroundInfoOne'>
                    <div className='alignFont'>
                        <h2>My experience</h2>
                        <p>At first, everything felt exciting but also a bit overwhelming. Moving to a new country, dealing with a different language, and adjusting to a new school system took time.
                            Still, I learned to be patient and more independent, because you really have to rely different way to yourself during an exchange, and that’s something that helped me grow a lot.
                        </p>
                        <p> Outside of school, things were amazing. Valencia has such a lively atmosphere. The warm weather and the sea made a huge difference. It felt like summer almost every day (if we compare to Finland), and I could go for walks along the beach or meet friends for volleyball and sunset hangouts.
                            I started surfing for the first time, and it quickly became one of my favorite hobbies. It was something completely new for me and made me feel connected to the local lifestyle.
                        </p>
                        <p>And the food... honestly, I ate so much good food! From traditional paella and tapas to fresh seafood and churros, Valencia is heaven for anyone who loves to eat. Food (Especially the good ones) became one of my favorite parts of the experience.
                        </p>
                    </div>
                </div>
            </div>
                <div className='travelPhotos'>
                    <img src={ViewsTwo} />
                </div>
            <div className='spainSections'>
                <div className='alignFont'>
                    <h1>Courses</h1>
                    <h2>3D Printing</h2>
                    <p>The 3D Printing course was one of my favorites because it was so hands-on and practical.
                        We learned about the design process, different printing materials, and how 3D printers actually work. For our final project, my group created a coffee train grinder.  It’s looking like a train toy, but  that included a manual coffee grinder. It was a challenging but fun project that taught me a lot about prototyping, precision (Example in dimensions), and teamwork.
                        Seeing the final product come to life after all the planning and testing was very rewarding.
                    </p>
                    <p> I created also a powerpoint presentation about the coffee train grinder which included fun animations. You can go check it here:
                    </p>
                </div>
                <button className='linkedin' onClick={() => window.open('https://www.linkedin.com/posts/millapohjolainen_upv-erasmus-valencia-activity-7328123503767900162-xWwM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1j6sYBbYvyPGNwNXFKuUQZfB9lyB1b-C0')}>
                    <img src={Linkedin} />
                    <h2>Coffee Grinder Train post</h2>
                </button>
                <div className='CoursesGreyLine'></div>
                <div className='alignFont'>
                    <h2>Web Data Analytics</h2>
                    <p>The 3D Printing course was one of my favorites because it was so hands-on and practical.
                        We learned about the design process, different printing materials, and how 3D printers actually work. For our final project, my group created a coffee train grinder.  It’s looking like a train toy, but  that included a manual coffee grinder. It was a challenging but fun project that taught me a lot about prototyping, precision (Example in dimensions), and teamwork.
                        Seeing the final product come to life after all the planning and testing was very rewarding.
                    </p>
                    <p> I created also a powerpoint presentation about the coffee train grinder which included fun animations. You can go check it here:
                    </p>
                </div>
                <div className='CoursesGreyLine'></div>
                <div className='alignFont'>
                    <h2>Ethics and Professionalism</h2>
                    <p>This course was about understanding the ethical responsibilities of working in the field of technology. We discussed topics like data privacy, professional conduct, and how technology can impact society.
                        It was interesting to think critically about how professionals should act in different situations and what values are important in the ICT industry.
                    </p>
                </div>
                <div className='CoursesGreyLine'></div>
            </div>
        </div>
    );
};

export default NetherlandsProject;
