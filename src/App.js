import './App.css';
import MyIntro from './Components/MyIntro/MyIntro';
import AboutMe from './Components/AboutMe/AboutMe';
import ProfileLinks from './Components/ProfileLinks/ProfileLinks';
import CircularLinks from './Components/ProfileLinks/CircularLinks';
import TechList from './Components/Tech/TechList';
import ProjectList from './Components/Projects/ProjectList';
import ExperienceList from './Components/Projects/ExperienceList';


function App() {
  return (
    <div >
      {/* <div className='bg'> */}
        
        {/* <ProfileLinks/> */}

        {/* <CircularLinks/> */}
        {/* <TechList /> */}
        {/* <MyIntro /> */}
        {/* <AboutMe/> */}
        
        <ProjectList/>
        <ExperienceList/>
      {/* </div> */}
    </div>
  );
}

export default App;
