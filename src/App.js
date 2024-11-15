import { Routes, Route } from 'react-router-dom';
import './style.css'
import Home from './pages/Home';
import CPCB from './pages/CPCB';
 
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cpcb" element={<CPCB />} />
         </Routes>
      </>
   );
};
 
export default App;
