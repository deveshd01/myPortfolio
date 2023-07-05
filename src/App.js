
import './App.css';
import MyIntro from './Components/MyIntro/MyIntro';
import AboutMe from './Components/AboutMe/AboutMe';
import ProfileLinks from './Components/ProfileLinks/ProfileLinks';
import CircularLinks from './Components/ProfileLinks/CircularLinks';
import TechList from './Components/Tech/TechList';



function App() {
  return (
    <div >
      <div className='bg'>
        
        {/* <ProfileLinks/> */}

        {/* <CircularLinks/> */}
        <TechList />
        <MyIntro />
        <AboutMe/>
      </div>
    </div>
  );
}

export default App;
