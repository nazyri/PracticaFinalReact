import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
const Routing = () => {
  return (
    <Router>
     <Routes>
       <Route path="/" element={<Register/>}/>
       <Route path="Login" element={<Login/>}/>
     </Routes>
    </Router>
   );
};
export default Routing;