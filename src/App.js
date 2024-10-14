import React,{useContext,createContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js//bootstrap';
import SubNavigation from './SubNavigation';
// import Suvidha from './pages/Suvidha/Suvidha';
const ThemeContaxt = createContext(null);

const App = () => {
  return (
    <ThemeContaxt.Provider value="dark">
      <SubNavigation />
    </ThemeContaxt.Provider>
    // {/* <Suvidha/> */}
  );
};

export default App;
