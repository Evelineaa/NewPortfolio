import './Projects.css';
import MainHeader from './Components/MainHeader';
import Buildings from './Pictures/BuildingsDenia.JPG'
import Spain from './Pictures/SpainFlagMountain.png'
import Netherlands from './Pictures/ProjectNetherlands.png'
import NorthernIreland from './Pictures/NorthernIrelandProject.png'


function ProjectsMenu() {

    return (
        <section className='sectionMenu'>
              <MainHeader theme='light'></MainHeader>
              <img src={Buildings}></img>
            <div className='buildingButtons'>
                <div className='mountain'>
                <button>
                    <img src={Spain}></img>
                </button>
                </div>
                <div className='rowBuildings'>
                 <div className='whiteBuilding'>
                 <button>
                    <img src={NorthernIreland}></img>
                </button>
                </div>
                 <div className='YellowBuilding'>
                 <button>
                    <img src={Netherlands}></img>
                </button>
                </div>
            </div>
            </div>
  </section>
    );
};

export default ProjectsMenu;
