import { HStack } from '@chakra-ui/react';
import './App.css';
// import Blank from './component/Blank';
import CakeDetail from './component/CakeDetail';
import Cakepic from './component/Cakepic';
// import RadioButtons from './component/RadioButtons'; 
import Slider from './Slider';
function App() {
  return (
    <div className="App">
     
  <HStack style={{
    margin:'auto',
    // display:'flex',
    justifyContent:'space-evenly'
    ,
  }}

 
  >
   
  <Cakepic/>
     <CakeDetail/>
   
  </HStack>
  <Slider/>
    </div>
  );
}

export default App;
