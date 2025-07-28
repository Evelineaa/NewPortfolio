import MainHeader from './Components/MainHeader';
import './Projects.css';
import window from './Pictures/NewDenia.svg';
import bird from './Pictures/birdWindowNew.svg'

function Projects() {
  console.log("Projects-komponentti renderöity");




    return (
        <section className='sectionBody'>
            <MainHeader theme='light'></MainHeader>
            <div className='bodypart'>
            <img className='bodyimage' src={window}></img>
            <div className='birdWindow'>
            <button className='buttonHover'>
                <img src={bird}></img>
            </button>
            </div>
     </div>
  </section>
    );
};

export default Projects;
