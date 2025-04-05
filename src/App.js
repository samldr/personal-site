import { Routes, Route } from 'react-router-dom';
import './style.css'
import Home from './pages/Home';
import CPCB from './pages/CPCB';
import Atriums from './pages/Atriums'
// import Friends from './pages/Friends';
 
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cpcb" element={<CPCB />} />
            {/* <Route path="/friends" element={<Friends />} /> */}
            <Route path="/atriums" element={<Atriums />} />
         </Routes>
      </>
   );
};
 
export default App;
