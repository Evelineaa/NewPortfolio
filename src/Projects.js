import MainHeader from './Components/MainHeader';
import './Projects.css';
import window from './Pictures/NewDenia.svg';
import bird from './Pictures/birdWindowNew.svg';
import { useNavigate } from 'react-router-dom';

function Projects() {
    const navigate = useNavigate();

    return (
        <body className='sectionBody'>
        <div>
            <MainHeader theme='light'></MainHeader>
            <div className='bodypart'>
            <img className='bodyimage' src={window}></img>
            <div className='birdWindow'>
            <button className='buttonHover' onClick={() => navigate('/projects/ProjectsMenu')}>
                <img src={bird}></img>
            </button>
            </div>
     </div>
  </div>
  </body>
    );
};

export default Projects;
